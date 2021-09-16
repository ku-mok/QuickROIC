from graphene import ObjectType, InputObjectType
from graphene.types.scalars import Float, Int, String
from graphene.types.structures import List


class Metrics(ObjectType):
    class Meta:
        description = "財務指標を表す型で年度・指標名称・値を持つ"
    year = Int(required=True)
    metrics_name = String(required=True)
    value = Float(required=True)


class CompanyData(ObjectType):
    class Meta:
        description = "企業のデータを表す型で企業名称とMetricsの配列を持つ"
    company_name = String(required=True)
    metrics = List(Metrics)


class MetricsInput(InputObjectType):
    class Meta:
        description = "財務指標を表す型で年度・指標名称・値を持つ"
    year = Int(required=True)
    metrics_name = String(required=True)
    value = Float(required=True)


class CompanyDataInput(InputObjectType):
    class Meta:
        description = "企業のデータを表す型で企業名称とMetricsの配列を持つ"
    company_name = String(required=True)
    metrics = List(MetricsInput)
