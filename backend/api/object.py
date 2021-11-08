from shutil import Error
from graphene import ObjectType, InputObjectType, NonNull
from graphene.types.scalars import Int, String
from graphene.types.structures import List
from graphene.types import Scalar


class MetricsValue(Scalar):
    @staticmethod
    def serialize(value):
        if type(value) is int or type(value) is float or type(value) is str:
            return value
        else:
            raise Error("Metrics Value Should be numeric or string")


class Metrics(ObjectType):
    class Meta:
        description = "財務指標を表す型で年度・指標名称・値を持つ"
    metrics_name = String(required=True)
    metrics_years = NonNull(List(NonNull(Int)))
    metrics_values = NonNull(List(MetricsValue))


class CompanyData(ObjectType):
    class Meta:
        description = "企業のデータを表す型で企業名称とMetricsの配列を持つ"
    company_name = String(required=True)
    metrics = NonNull(Metrics)


class MetricsInput(InputObjectType):
    class Meta:
        description = "財務指標を表す型で年度・指標名称・値を持つ"
    metrics_name = String(required=True)
    metrics_years = NonNull(List(NonNull(Int)))
    metrics_values = NonNull(List(MetricsValue))


class CompanyDataInput(InputObjectType):
    class Meta:
        description = "企業のデータを表す型で企業名称とMetricsの配列を持つ"
    company_name = String(required=True)
    metrics = NonNull(MetricsInput)
