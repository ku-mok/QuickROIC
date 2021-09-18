from graphene.test import Client
from snapshottest import TestCase
from api import schema


variables = {"data":  [{
    "companyName": "Sample1",
    "metrics": [
            {"year": 2014, "metricsName": "EBITDA", "value": 88.0},
            {"year": 2014, "metricsName": "NOPAT", "value": 80496.0},
            {"year": 2014, "metricsName": "β", "value": 1.278444216673263},
            {"year": 2014, "metricsName": "企業価値", "value": 1429.21471},
            {"year": 2014, "metricsName": "固定資産", "value": 810541.0},
            {"year": 2014, "metricsName": "売上債権", "value": 140387.0},
            {"year": 2014, "metricsName": "売上原価", "value": 557884.0},
            {"year": 2014, "metricsName": "売上高合計", "value": 840722.0},
            {"year": 2014, "metricsName": "投下資本", "value": 987334.0},
            {"year": 2014, "metricsName": "支払利息割引料", "value": 15.0},
            {"year": 2014, "metricsName": "時価総額(自己株式調整後)", "value": 2157.21471},
            {"year": 2014, "metricsName": "有利子負債残高", "value": 1092.0},
            {"year": 2014, "metricsName": "棚卸資産", "value": 59688.0},
            {"year": 2014, "metricsName": "現預金及び同等物", "value": 247721.0},
            {"year": 2014, "metricsName": "販売費及び一般管理費", "value": 159222.0},
            {"year": 2014, "metricsName": "買入債務", "value": 43160.0},
            {"year": 2015, "metricsName": "EBITDA", "value": 67.0},
            {"year": 2015, "metricsName": "NOPAT", "value": 89958.0},
            {"year": 2015, "metricsName": "β", "value": 1.278444216673263},
            {"year": 2015, "metricsName": "企業価値", "value": 1257.805914},
            {"year": 2015, "metricsName": "固定資産", "value": 878293.0},
            {"year": 2015, "metricsName": "売上債権", "value": 153860.0},
            {"year": 2015, "metricsName": "売上原価", "value": 586539.0},
            {"year": 2015, "metricsName": "売上高合計", "value": 881028.0},
            {"year": 2015, "metricsName": "投下資本", "value": 1046359.0},
            {"year": 2015, "metricsName": "支払利息割引料", "value": 13.0},
            {"year": 2015, "metricsName": "時価総額(自己株式調整後)", "value": 1904.805914},
            {"year": 2015, "metricsName": "有利子負債残高", "value": 901.0},
            {"year": 2015, "metricsName": "棚卸資産", "value": 62856.0},
            {"year": 2015, "metricsName": "現預金及び同等物", "value": 228458.0},
            {"year": 2015, "metricsName": "販売費及び一般管理費", "value": 165906.0},
            {"year": 2015, "metricsName": "買入債務", "value": 41794.0},
            {"year": 2016, "metricsName": "EBITDA", "value": 3.0},
            {"year": 2016, "metricsName": "NOPAT", "value": 85355.0},
            {"year": 2016, "metricsName": "β", "value": 1.278444216673263},
            {"year": 2016, "metricsName": "企業価値", "value": 727.508434},
            {"year": 2016, "metricsName": "固定資産", "value": 888367.0},
            {"year": 2016, "metricsName": "売上債権", "value": 152891.0},
            {"year": 2016, "metricsName": "売上原価", "value": 621412.0},
            {"year": 2016, "metricsName": "売上高合計", "value": 928098.0},
            {"year": 2016, "metricsName": "投下資本", "value": 1097727.0},
            {"year": 2016, "metricsName": "支払利息割引料", "value": 10.0},
            {"year": 2016, "metricsName": "時価総額(自己株式調整後)", "value": 1376.508434},
            {"year": 2016, "metricsName": "有利子負債残高", "value": 781.0},
            {"year": 2016, "metricsName": "棚卸資産", "value": 61698.0},
            {"year": 2016, "metricsName": "現預金及び同等物", "value": 302364.0},
            {"year": 2016, "metricsName": "販売費及び一般管理費", "value": 175636.0},
            {"year": 2016, "metricsName": "買入債務", "value": 44635.0}
    ]}
]}


class QuerySnapshot (TestCase):

    def test_calc_roic(self):
        client = Client(schema)
        query = ''' query roicwacc($data: [CompanyDataInput]){
          calcRoic(data: $data, metrics: ["ROIC", "WACC"]){
            companyName
              metrics {
                year
                metricsName
                value
              }
            }
        }'''
        self.assertMatchSnapshot(client.execute(query, variables=variables))

    def test_calc_roic_driver(self):
        client = Client(schema)
        query = ''' query driver($data: [CompanyDataInput]){
          calcDrivers(data: $data){
            companyName
              metrics {
                year
                metricsName
                value
              }
            }
        }'''
        self.assertMatchSnapshot(client.execute(query, variables=variables))
