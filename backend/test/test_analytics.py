import os
import unittest
import pandas as pd
from pandas.testing import assert_series_equal
from roic import speeda_excel_to_dataframe, calc_roic_wacc


class TestRoicCalc(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        test_files = [
            os.path.join(os.path.dirname(__file__), "test_excel", filename)
            for filename in
            ["RoicWaccCalcTestInput1.xlsx", "RoicWaccCalcTestInput2.xlsx"]
        ]
        speeda_df = speeda_excel_to_dataframe(test_files)

        cls.calcurated_df = calc_roic_wacc(speeda_df).reset_index()
        cls.expected_df = pd.read_excel(os.path.join(
            os.path.dirname(__file__), "test_excel",
            "RoicWaccCalcTestOutput.xlsx"),
            sheet_name="Output")

    def test_roic_calc(self):
        assert_series_equal(self.expected_df.ROIC, self.calcurated_df.ROIC)

    def test_wacc_calc(self):
        # Absolute Toralanceは0.0005(0.05%)とする（Excelの浮動小数点の誤差がデカい？）
        assert_series_equal(TestRoicCalc.expected_df.WACC,
                            TestRoicCalc.calcurated_df.WACC,
                            atol=0.0005)

    def test_eva_spread(self):
        assert_series_equal(TestRoicCalc.expected_df.EVAスプレッド,
                            TestRoicCalc.calcurated_df.EVAスプレッド,
                            atol=0.0005)
