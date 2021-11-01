from roic.analytics import calc_roic_tree_drivers
from graphene import ObjectType, Field, List, NonNull
import graphene
from graphene.types.scalars import String
from .object import CompanyData, CompanyDataInput
from roic import dataframe_to_dict, dict_to_dataframe, calc_roic_wacc


class User(graphene.ObjectType):
    username = graphene.String()


class Query(ObjectType):
    calc_roic = Field(
        NonNull(List(NonNull(CompanyData))),
        description="ROIC計算を行うクエリ。dataに計算を行うデータを渡し、metricsに必要なカラムを指定する。デフォルト値（空配列）の場合すべてのカラムが帰る",
        data=List(CompanyDataInput),
        metrics=List(String, default_value=[])
    )
    calc_drivers = Field(
        NonNull(List(NonNull(CompanyData))),
        description="ROICドライバ計算を行うクエリ。dataに計算を行うデータを渡し、metricsに必要なカラムを指定する。デフォルト値（空配列）の場合すべてのカラムが帰る",
        data=List(CompanyDataInput),
        metrics=List(String, default_value=[])
    )

    def resolve_calc_roic(self, info, data, metrics):
        df = dict_to_dataframe(data)
        if (len(metrics) > 0):
            return dataframe_to_dict(calc_roic_wacc(df), columns=metrics)
        else:
            return dataframe_to_dict(calc_roic_wacc(df))

    def resolve_calc_drivers(self, info, data, metrics):
        df = dict_to_dataframe(data)
        if (len(metrics) > 0):
            return dataframe_to_dict(calc_roic_tree_drivers(df), columns=metrics)
        else:
            return dataframe_to_dict(calc_roic_tree_drivers(df))
