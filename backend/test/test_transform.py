import unittest
from roic.transform import speeda_excel_to_dataframe
from pandas.testing import assert_frame_equal
from roic import dataframe_to_dict, dict_to_dataframe
import pandas as pd
import os


class TestSpeedaTransform(unittest.TestCase):
    def test_speeda_excel_to_dataframe(self):
        test_file = os.path.join(os.path.dirname(__file__), "test_excel",
                                 "SpeedaTransformTestInput.xlsx")
        actual = speeda_excel_to_dataframe([test_file])
        expect_dict = {
            0: {
                '企業名称': 'Sample1',
                '年度': 2014,
                '有利子負債残高': 1092,
                '支払利息割引料': 15,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 1.278444217
            },
            1: {
                '企業名称': 'Sample1',
                '年度': 2015,
                '有利子負債残高': 901,
                '支払利息割引料': 13,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 1.278444217
            },
            2: {
                '企業名称': 'Sample1',
                '年度': 2016,
                '有利子負債残高': 781,
                '支払利息割引料': 10,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 1.278444217
            },
            3: {
                '企業名称': 'Sample1',
                '年度': 2017,
                '有利子負債残高': 576,
                '支払利息割引料': 6,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 1.278444217
            },
            4: {
                '企業名称': 'Sample1',
                '年度': 2018,
                '有利子負債残高': 571,
                '支払利息割引料': 5,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 1.278444217
            },
            5: {
                '企業名称': 'Sample1',
                '年度': 2019,
                '有利子負債残高': 398,
                '支払利息割引料': 4,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 1.278444217
            },
            6: {
                '企業名称': 'Sample2',
                '年度': 2014,
                '有利子負債残高': 79993,
                '支払利息割引料': 946,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.663532671
            },
            7: {
                '企業名称': 'Sample2',
                '年度': 2015,
                '有利子負債残高': 103215,
                '支払利息割引料': 896,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.663532671
            },
            8: {
                '企業名称': 'Sample2',
                '年度': 2016,
                '有利子負債残高': 84474,
                '支払利息割引料': 974,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.663532671
            },
            9: {
                '企業名称': 'Sample2',
                '年度': 2017,
                '有利子負債残高': 77638,
                '支払利息割引料': 775,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.663532671
            },
            10: {
                '企業名称': 'Sample2',
                '年度': 2018,
                '有利子負債残高': 73153,
                '支払利息割引料': 788,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.663532671
            },
            11: {
                '企業名称': 'Sample2',
                '年度': 2019,
                '有利子負債残高': 71083,
                '支払利息割引料': 780,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.663532671
            },
            12: {
                '企業名称': 'Sample3',
                '年度': 2014,
                '有利子負債残高': 78,
                '支払利息割引料': 9,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.490685217
            },
            13: {
                '企業名称': 'Sample3',
                '年度': 2015,
                '有利子負債残高': 52,
                '支払利息割引料': 6,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.490685217
            },
            14: {
                '企業名称': 'Sample3',
                '年度': 2016,
                '有利子負債残高': 46,
                '支払利息割引料': 1,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.490685217
            },
            15: {
                '企業名称': 'Sample3',
                '年度': 2017,
                '有利子負債残高': 45,
                '支払利息割引料': 1,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.490685217
            },
            16: {
                '企業名称': 'Sample3',
                '年度': 2018,
                '有利子負債残高': 45,
                '支払利息割引料': 1,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.490685217
            },
            17: {
                '企業名称': 'Sample3',
                '年度': 2019,
                '有利子負債残高': 44,
                '支払利息割引料': 1,
                'SPEEDA業界分類': '警備保障サービス',
                'β': 0.490685217
            }
        }
        expect = pd.DataFrame.from_dict(expect_dict).T.astype({
            "年度": int,
            "支払利息割引料": int,
            "有利子負債残高": int,
            "β": float,
        })
        assert_frame_equal(actual, expect, check_like=True)

    def test_unaltered_after_df_to_dict_df(self):
        # データフレームから辞書・辞書からデータフレームが逆変換になっているかを確認
        input = pd.DataFrame.from_dict(
            {'企業名称': ['Sample1']*3 + ['Sample2']*3 + ['Sample3']*3,
             '年度': [2014, 2015, 2016]*3,
             '指標1': [1, 3, 5, 7, 9, 11, 13, 15, 17],
             '指標2': [2, 4, 5, 7, 9, 12, 15, 15, 17]
             })
        assert_frame_equal(input, dict_to_dataframe(dataframe_to_dict(input)), check_like=True)

    def test_select_columns(self):
        input = pd.DataFrame.from_dict(
            {'企業名称': ['Sample1']*3 + ['Sample2']*3 + ['Sample3']*3,
             '年度': [2014, 2015, 2016]*3,
             '指標1': [1, 3, 5, 7, 9, 11, 13, 15, 17],
             '指標2': [2, 4, 5, 7, 9, 12, 15, 15, 17]
             })
        assert_frame_equal(input.drop(columns=["指標2"]), dict_to_dataframe(
            dataframe_to_dict(input, columns=["指標1"])), check_like=True)
