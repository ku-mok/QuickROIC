import pandas as pd


def calc_average(df: pd.DataFrame, target_col: str) -> pd.DataFrame:
    """平残を計算する

    Args:
        df (pd.DataFrame): 計算を行うデータフレームで、年度と企業名称、平残を計算する対象の列が必要
        target_col (str): 平残を計算する対象の列

    Returns:
        pd.DataFrame: 計算された平残が格納されたデータフレームで、年度、企業名称、対象の列_平残の3列を含む
    """
    return df\
        .assign(prior_year=lambda d: d.年度 - 1)\
        .merge(df[["年度", "企業名称"] + [target_col]],
               left_on=["企業名称", "prior_year"], right_on=["企業名称", "年度"],
               suffixes=("", "_prior"))\
        .assign(ave=lambda d: (d[target_col] + d[target_col+"_prior"])/2)[["年度", "企業名称", "ave"]]\
        .rename(columns={"ave": target_col+"_平残"})


def calc_roic_wacc(df: pd.DataFrame,
                   risk_free_rate: float = 0.0001,
                   market_risk_premium: float = 0.05,
                   effective_tax_rate: float = 0.2974) -> pd.DataFrame:
    """ROIC/WACCの計算を行う.投下資本・有利子負債残高・支払利息割引料・ベータ・時価総額のカラムが必要

    Args:
        df (pd.DataFrame): 計算を行うデータフレーム
        risk_free_rate (float, optional): 株主資本コストを求める際に使うリスクフリーレート. Defaults to 0.0001(日本国債１０年物).
        market_risk_premium (float, optional): 株主資本コストを求める際に使うマーケットリスクプレミアム. Defaults to 0.05
        effective_tax_rate (float, optional): 負債コストのタックスシールドを計算するための実効税率. Defaults to 0.2974

    Returns:
        pd.DataFrame: [description]
    """
    # 投下資本を平残にした上でNOPATを使ってROICを計算する
    roic = df.merge(calc_average(df, "投下資本"), on=["企業名称", "年度"])\
             .assign(ROIC=lambda d: d.NOPAT / d.投下資本_平残)[["企業名称", "年度", "投下資本_平残", "ROIC"]]
    # 有利子資本の平残を負債、時価総額の平残を株主資本とした上で、WACCを計算する
    wacc = df.merge(calc_average(df, "有利子負債残高"), on=["企業名称", "年度"])\
             .merge(calc_average(df, "時価総額(自己株式調整後)"), on=["企業名称", "年度"])\
             .rename(columns={"時価総額(自己株式調整後)_平残": "株主資本", "有利子負債残高_平残": "負債"})\
             .assign(負債コスト=lambda d: d.支払利息割引料 / d.負債,
                     株主資本コスト=lambda d: risk_free_rate + d.β * market_risk_premium,
                     総資本=lambda d: d.負債 + d.株主資本,
                     WACC=lambda d: d.株主資本コスト * d.株主資本 / d.総資本 + d.負債コスト * (1 - effective_tax_rate) * d.負債 / d.総資本)
    roic_wacc = wacc[["企業名称", "年度", "負債コスト", "株主資本コスト", "WACC"]]\
        .merge(roic, on=["企業名称", "年度"])\
        .assign(EVAスプレッド=lambda d: d.ROIC - d.WACC)
    return roic_wacc.sort_values(["企業名称", "年度"])
