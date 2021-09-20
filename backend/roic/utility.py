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
