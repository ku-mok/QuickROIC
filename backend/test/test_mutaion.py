from test.Mixin.graphqlfileupload import GraphQLFileUploadTestMixin
from roic.transform import dataframe_to_dict, speeda_excel_to_dataframe
import unittest
from fastapi.testclient import TestClient
from api.server import app
import json
import os


class MutationTest(unittest.TestCase, GraphQLFileUploadTestMixin):
    def setUp(self) -> None:
        client = TestClient(app)

        def client_post(graphql_url, data, files, headers=None):
            if headers:
                return client.post(graphql_url, data, files=files, headers=headers)
            else:
                return client.post(graphql_url, data, files=files)
        self.client_post = client_post

    def test_single_excel_upload(self):
        test_file_path = os.path.join(
            os.path.dirname(__file__), "test_excel",
            "SpeedaTransformTestInput.xlsx")
        with open(test_file_path, "rb") as f:
            test_file = f.read()
        query = """
            mutation UploadSingleExcel($file: Upload!){
                uploadSpeedaExcel(file: $file){
                    ok
                    companyData{
                        companyName
                            metrics {
                                year
                                metricsName
                                value
                            }
                    }
                }
             }
        """
        # response = self.client.post(
        #     '/graphql',
        #     data={
        #         'operations': json.dumps({
        #             'query': query,
        #             'variables': {
        #                 'file': None,
        #             }
        #         }),
        #         "map": json.dumps({
        #             "file": ["variables.file"]
        #         })
        #     },
        #     files={
        #         'file':  test_file,
        #     }
        # )
        response = self.file_query(query, files={"file": test_file})
        # 正常処理完了の確認
        self.assertResponseNoErrors(response)
        # エクセルを正しくパースして返しているかの確認
        expected_compnay_data = [
            {
                "companyName": "Sample1",
                "metrics": [
                    {
                        "year": 2014,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2014,
                        "metricsName": "β",
                        "value": 1.278444216673263
                    },
                    {
                        "year": 2014,
                        "metricsName": "支払利息割引料",
                        "value": 15
                    },
                    {
                        "year": 2014,
                        "metricsName": "有利子負債残高",
                        "value": 1092
                    },
                    {
                        "year": 2015,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2015,
                        "metricsName": "β",
                        "value": 1.278444216673263
                    },
                    {
                        "year": 2015,
                        "metricsName": "支払利息割引料",
                        "value": 13
                    },
                    {
                        "year": 2015,
                        "metricsName": "有利子負債残高",
                        "value": 901
                    },
                    {
                        "year": 2016,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2016,
                        "metricsName": "β",
                        "value": 1.278444216673263
                    },
                    {
                        "year": 2016,
                        "metricsName": "支払利息割引料",
                        "value": 10
                    },
                    {
                        "year": 2016,
                        "metricsName": "有利子負債残高",
                        "value": 781
                    },
                    {
                        "year": 2017,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2017,
                        "metricsName": "β",
                        "value": 1.278444216673263
                    },
                    {
                        "year": 2017,
                        "metricsName": "支払利息割引料",
                        "value": 6
                    },
                    {
                        "year": 2017,
                        "metricsName": "有利子負債残高",
                        "value": 576
                    },
                    {
                        "year": 2018,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2018,
                        "metricsName": "β",
                        "value": 1.278444216673263
                    },
                    {
                        "year": 2018,
                        "metricsName": "支払利息割引料",
                        "value": 5
                    },
                    {
                        "year": 2018,
                        "metricsName": "有利子負債残高",
                        "value": 571
                    },
                    {
                        "year": 2019,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2019,
                        "metricsName": "β",
                        "value": 1.278444216673263
                    },
                    {
                        "year": 2019,
                        "metricsName": "支払利息割引料",
                        "value": 4
                    },
                    {
                        "year": 2019,
                        "metricsName": "有利子負債残高",
                        "value": 398
                    }
                ]
            },
            {
                "companyName": "Sample2",
                "metrics": [
                    {
                        "year": 2014,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2014,
                        "metricsName": "β",
                        "value": 0.6635326712213828
                    },
                    {
                        "year": 2014,
                        "metricsName": "支払利息割引料",
                        "value": 946
                    },
                    {
                        "year": 2014,
                        "metricsName": "有利子負債残高",
                        "value": 79993
                    },
                    {
                        "year": 2015,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2015,
                        "metricsName": "β",
                        "value": 0.6635326712213828
                    },
                    {
                        "year": 2015,
                        "metricsName": "支払利息割引料",
                        "value": 896
                    },
                    {
                        "year": 2015,
                        "metricsName": "有利子負債残高",
                        "value": 103215
                    },
                    {
                        "year": 2016,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2016,
                        "metricsName": "β",
                        "value": 0.6635326712213828
                    },
                    {
                        "year": 2016,
                        "metricsName": "支払利息割引料",
                        "value": 974
                    },
                    {
                        "year": 2016,
                        "metricsName": "有利子負債残高",
                        "value": 84474
                    },
                    {
                        "year": 2017,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2017,
                        "metricsName": "β",
                        "value": 0.6635326712213828
                    },
                    {
                        "year": 2017,
                        "metricsName": "支払利息割引料",
                        "value": 775
                    },
                    {
                        "year": 2017,
                        "metricsName": "有利子負債残高",
                        "value": 77638
                    },
                    {
                        "year": 2018,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2018,
                        "metricsName": "β",
                        "value": 0.6635326712213828
                    },
                    {
                        "year": 2018,
                        "metricsName": "支払利息割引料",
                        "value": 788
                    },
                    {
                        "year": 2018,
                        "metricsName": "有利子負債残高",
                        "value": 73153
                    },
                    {
                        "year": 2019,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2019,
                        "metricsName": "β",
                        "value": 0.6635326712213828
                    },
                    {
                        "year": 2019,
                        "metricsName": "支払利息割引料",
                        "value": 780
                    },
                    {
                        "year": 2019,
                        "metricsName": "有利子負債残高",
                        "value": 71083
                    }
                ]
            },
            {
                "companyName": "Sample3",
                "metrics": [
                    {
                        "year": 2014,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2014,
                        "metricsName": "β",
                        "value": 0.49068521681446403
                    },
                    {
                        "year": 2014,
                        "metricsName": "支払利息割引料",
                        "value": 9
                    },
                    {
                        "year": 2014,
                        "metricsName": "有利子負債残高",
                        "value": 78
                    },
                    {
                        "year": 2015,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2015,
                        "metricsName": "β",
                        "value": 0.49068521681446403
                    },
                    {
                        "year": 2015,
                        "metricsName": "支払利息割引料",
                        "value": 6
                    },
                    {
                        "year": 2015,
                        "metricsName": "有利子負債残高",
                        "value": 52
                    },
                    {
                        "year": 2016,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2016,
                        "metricsName": "β",
                        "value": 0.49068521681446403
                    },
                    {
                        "year": 2016,
                        "metricsName": "支払利息割引料",
                        "value": 1
                    },
                    {
                        "year": 2016,
                        "metricsName": "有利子負債残高",
                        "value": 46
                    },
                    {
                        "year": 2017,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2017,
                        "metricsName": "β",
                        "value": 0.49068521681446403
                    },
                    {
                        "year": 2017,
                        "metricsName": "支払利息割引料",
                        "value": 1
                    },
                    {
                        "year": 2017,
                        "metricsName": "有利子負債残高",
                        "value": 45
                    },
                    {
                        "year": 2018,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2018,
                        "metricsName": "β",
                        "value": 0.49068521681446403
                    },
                    {
                        "year": 2018,
                        "metricsName": "支払利息割引料",
                        "value": 1
                    },
                    {
                        "year": 2018,
                        "metricsName": "有利子負債残高",
                        "value": 45
                    },
                    {
                        "year": 2019,
                        "metricsName": "SPEEDA業界分類",
                        "value": "警備保障サービス"
                    },
                    {
                        "year": 2019,
                        "metricsName": "β",
                        "value": 0.49068521681446403
                    },
                    {
                        "year": 2019,
                        "metricsName": "支払利息割引料",
                        "value": 1
                    },
                    {
                        "year": 2019,
                        "metricsName": "有利子負債残高",
                        "value": 44
                    }
                ]
            }
        ]
        actual_company_data = response.json()["data"]["uploadSpeedaExcel"]["companyData"]
        self.assertEqual(expected_compnay_data, actual_company_data)
