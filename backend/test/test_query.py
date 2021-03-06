from graphene.test import Client
from snapshottest import TestCase
from api import schema


variables = {"data": [
    {'companyName': 'Sample1',
     'metrics': {'metricsName': 'EBITDA',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [88, 67, 3, 121, 189, 172]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': 'NOPAT',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [80496, 89958, 85355, 89951, 91020, 97242]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': 'SPEEDA業界分類_x',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': ['警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス']}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': 'SPEEDA業界分類_y',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': ['警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス']}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': 'β',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [1.278444216673263,
                                   1.278444216673263,
                                   1.278444216673263,
                                   1.278444216673263,
                                   1.278444216673263,
                                   1.278444216673263]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '企業価値',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [1429.21471,
                                   1257.805914,
                                   727.508434,
                                   4032.367684,
                                   2275.93088,
                                   76.12416]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '固定資産',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [810541, 878293, 888367, 913521, 918346, 900656]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '売上債権',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [140387, 153860, 152891, 165256, 175275, 182354]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '売上原価',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [557884, 586539, 621412, 652673, 692211, 722546]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '売上高合計',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [840722, 881028, 928098, 970624, 1013823, 1060070]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '投下資本',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [987334, 1046359, 1097727, 1158851, 1199107, 1243577]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '支払利息割引料',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [15, 13, 10, 6, 5, 4]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '時価総額(自己株式調整後)',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [2157.21471,
                                   1904.805914,
                                   1376.508434,
                                   4678.367684,
                                   3157.93088,
                                   1121.12416]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '有利子負債残高',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [1092, 901, 781, 576, 571, 398]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '棚卸資産',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [59688, 62856, 61698, 81122, 77994, 67542]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '現預金及び同等物',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [247721, 228458, 302364, 317267, 350319, 414199]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '販売費及び一般管理費',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [159222, 165906, 175636, 182502, 191397, 194664]}},
    {'companyName': 'Sample1',
     'metrics': {'metricsName': '買入債務',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [43160, 41794, 44635, 43929, 45826, 47409]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': 'EBITDA',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [172757, 180711, 191107, 196771, 193820, 207996]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': 'NOPAT',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [13191, 17752, 18141, 19218, 21471, 24151]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': 'SPEEDA業界分類_x',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': ['警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス']}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': 'SPEEDA業界分類_y',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': ['警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス',
                                   '警備保障サービス']}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': 'β',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [0.6635326712213828,
                                   0.6635326712213828,
                                   0.6635326712213828,
                                   0.6635326712213828,
                                   0.6635326712213828,
                                   0.6635326712213828]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '企業価値',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [1662217.837625,
                                   1776146.996838,
                                   1613291.908343,
                                   1600218.15456,
                                   1897230.657664,
                                   1720488.91934]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '固定資産',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [163418, 161548, 186250, 200319, 202066, 199309]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '売上債権',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [44020, 45643, 50118, 52286, 54926, 56043]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '売上原価',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [276116, 282880, 310704, 330493, 334197, 345097]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '売上高合計',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [365749, 381818, 413343, 435982, 443535, 460118]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '投下資本',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [278061, 252830, 287827, 294037, 304508, 321695]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '支払利息割引料',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [946, 896, 974, 775, 788, 780]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '時価総額(自己株式調整後)',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [1751567.837625,
                                   1825978.996838,
                                   1739315.908343,
                                   1728618.15456,
                                   2069544.657664,
                                   1958668.91934]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '有利子負債残高',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [79993, 103215, 84474, 77638, 73153, 71083]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '棚卸資産',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [5152, 6586, 5826, 6164, 5859, 7415]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '現預金及び同等物',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [142873, 115892, 122332, 116288, 126421, 143885]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '販売費及び一般管理費',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [66660, 69901, 74217, 75378, 77057, 78224]}},
    {'companyName': 'Sample2',
     'metrics': {'metricsName': '買入債務',
                 'metricsYears': [2014, 2015, 2016, 2017, 2018, 2019],
                 'metricsValues': [23946, 22602, 21426, 23420, 22993, 25326]}}
]}


class QuerySnapshot (TestCase):

    def test_calc_roic(self):
        client = Client(schema)
        query = ''' query roicwacc($data: [CompanyDataInput]){
          calcRoic(data: $data, metrics: ["ROIC", "WACC"]){
            companyName
              metrics {
                metricsName
                metricsYears
                metricsValues
              }
            }
        }'''
        query_result = client.execute(query, variables=variables)
        self.assertTrue(query_result and "errors" not in query_result)
        self.assertMatchSnapshot(query_result)

    def test_calc_roic_driver(self):
        client = Client(schema)
        query = ''' query driver($data: [CompanyDataInput]){
          calcDrivers(data: $data){
            companyName
              metrics {
                metricsName
                metricsYears
                metricsValues
              }
            }
        }'''
        query_result = client.execute(query, variables=variables)
        self.assertTrue(query_result and "errors" not in query_result)
        self.assertMatchSnapshot(query_result)
