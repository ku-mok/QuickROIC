import pandas as pd
from .utility import calc_average


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


def calc_roic_tree_drivers(df: pd.DataFrame) -> pd.DataFrame:
    df_with_drivers = df.copy()
    if "運転資本" not in df_with_drivers.columns:
        df_with_drivers["運転資本"] = df["売上債権"] + df["棚卸資産"] - df["買入債務"]
    # ストック系の指標を平残化(AP, AR, FA, WIP, IC)
    stock_average = [
        calc_average(df_with_drivers, target_col="売上債権"),
        calc_average(df_with_drivers, target_col="固定資産"),
        calc_average(df_with_drivers, target_col="買入債務"),
        calc_average(df_with_drivers, target_col="棚卸資産"),
        calc_average(df_with_drivers, target_col="投下資本"),
        calc_average(df_with_drivers, target_col="運転資本")
    ]
    for s in stock_average:
        df_with_drivers = df_with_drivers.merge(s, on=["企業名称", "年度"], how="right")
    # 比率系のドライバの設定　分子-分母-ドライバの名称のタプルの配列で指定
    ratio_drivers = [("売上原価", "売上高合計", "売上原価率"),
                     ("販売費及び一般管理費", "売上高合計", "販管費率"),
                     ("NOPAT", "売上高合計", "NOPATマージン"),
                     ("売上高合計", "投下資本_平残", "投下資本回転率"),
                     ("売上高合計", "固定資産_平残", "固定資産回転率"),
                     ("売上高合計", "売上債権_平残", "売上債権回転率"),
                     ("売上高合計", "運転資本_平残", "運転資本回転率"),
                     ("売上原価", "買入債務_平残", "仕入債務回転率"),
                     ("売上高合計", "棚卸資産_平残", "棚卸資産回転率")]
    for d in ratio_drivers:
        df_with_drivers[d[2]] = df_with_drivers[d[0]] / df_with_drivers[d[1]]
    return df_with_drivers.dropna()
