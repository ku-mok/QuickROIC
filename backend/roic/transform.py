from __future__ import annotations
"""データの変形を行うモジュール
"""
import pandas as pd
import itertools
from typing import Literal
import numpy as np


def speeda_excel_to_dataframe(book_path_list: list[str]) -> pd.DataFrame:
    """SPEEDAからダウンロードしたファイルを元にデータフレームを作成する

    Args:
        book_path_list (list[str]): SPEEDAからダウンロードしたファイルの保存先のリスト

    Returns:
        pd.DataFrame: SPEEDAからダウンロードしたファイルを成形したDataFrame
    """
    sheet_data_list: list[pd.DataFrame] = []
    company_master_list: list[pd.DataFrame] = []
    for book in book_path_list:
        sheet_data = pd.read_excel(book, skiprows=7, header=[0, 1])
        # カラム名(エクセルの8,9行)は科目名と年度になっており、科目名は空白の場合があるのでUnnamedを空白に置き換えて列名とする
        col_name = [(c[0], "" if "Unnamed" in c[1] else c[1]) for c in sheet_data.columns]
        sheet_data.columns = pd.MultiIndex.from_tuples(col_name)
        # カラム名タプルの第二要素(年度)が空白の業界分類などは年度に結びつかないマスタ系のデータとする
        company_master_col = list(filter(lambda x: x[1] == "", col_name))
        sheet_data = sheet_data.dropna(subset=company_master_col)
        company_master = sheet_data[company_master_col]
        company_master.columns = [x[0] for x in company_master_col]
        # マスタ系のデータを除いて成形する
        # 年度(level=1)を縦持ちにして、企業名・年度でユニークになり、科目名が列のデータフレームにする
        sheet_data = sheet_data.drop(columns=company_master_col)\
                               .assign(企業名称=company_master.企業名称)\
                               .set_index("企業名称").stack(level=(1))\
                               .reset_index()\
                               .rename(columns={"level_1": "年度"})
        # 年度は年度通期という文字が入っているため取り除く
        sheet_data = sheet_data\
            .assign(年度=lambda d: d.年度.str.replace("年度通期", ""))
        # 成形したデータを後からマージできるようにリストに追加する
        sheet_data_list.append(sheet_data)
        company_master_list.append(company_master)
    # 各シートから成形したデータをマージする
    if len(sheet_data_list) == 1:
        company_data = sheet_data_list[0]
        company_master = company_master_list[0]
    else:
        company_data = sheet_data_list[0]
        company_master = company_master_list[0]
        for i in range(1, len(sheet_data_list)):
            company_data = company_data.merge(sheet_data_list[i], on=["企業名称", "年度"])
            company_master = company_master.merge(company_master_list[i], on=["企業名称"])

    # βはLTMしか存在しないためマスタ系に移す
    beta_col = company_data.filter(like="β").columns
    if len(beta_col) > 0:
        company_master = company_data[["企業名称"] + list(beta_col)].dropna()\
            .merge(company_master, on="企業名称", how="right")\
            .rename(columns={beta_col[0]: "β"})
    # LTMを除外して、数字のカラムは数値型にする
    company_data = company_data\
        .drop(columns=beta_col)\
        .query("年度!='LTM'")\
        .apply(lambda x: pd.to_numeric(x, errors='ignore'))
    company_master = company_master.apply(lambda x: pd.to_numeric(x, errors='ignore'))
    # マスタ系のデータと統合して返す
    return company_data.merge(company_master, on="企業名称", how="left")


def dataframe_to_dict(df: pd.DataFrame, columns: list[str] | Literal["all"] = "all"):
    if columns == "all":
        df = df.copy()
    else:
        df = df[['企業名称', '年度'] + columns]
    df_dict = df.set_index(["企業名称", "年度"])\
        .stack()\
        .reset_index()\
        .rename(columns={"level_2": "指標名", 0: "値"})\
        .pivot_table(index=["企業名称", "指標名"], columns=["年度"], aggfunc="sum")\
        .stack(0)\
        .reset_index(2)\
        .drop(columns="level_2")\
        .applymap(lambda x: int(x) if (type(x) is not str and int(x) == x) else x)\
        .to_dict("index")
    # GraphQLで扱いやすい辞書に変換
    return [
        {
            "company_name": company_name,
            "metrics": {
                "metrics_name": metrics_name,
                "metrics_years": list(values.keys()),
                "metrics_values": list(values.values())}

        }
        for [company_name, metrics_name], values in df_dict.items()
    ]


def dict_to_dataframe(input_dict):

    tmp = pd.DataFrame(list(itertools.chain.from_iterable([
        [
            {
                "company_name": item["company_name"],
                "metrics_name": item["metrics"]["metrics_name"],
                "year":item["metrics"]["metrics_years"][i],
                "value":item["metrics"]["metrics_values"][i]
            }
            for i in range(len(item["metrics"]["metrics_years"]))
        ]
        for item in input_dict])))\
        .pivot_table(index=["company_name", "year"], columns=["metrics_name"], aggfunc=sum)\
        .applymap(lambda x: int(x) if (type(x) is not str and int(x) == x) else x)
    tmp.columns = [c[1] for c in tmp.columns]
    return tmp.reset_index().rename(columns={"company_name": "企業名称", "year": "年度"})
