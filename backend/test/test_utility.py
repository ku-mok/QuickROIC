import unittest
import pandas as pd
from pandas.testing import assert_frame_equal
from roic import calc_average


class TestUtility(unittest.TestCase):
    def test_calc_average(self):
        input = pd.DataFrame.from_dict(
            {'企業名称': ['Sample1', 'Sample1', 'Sample1'],
             '年度': [2014, 2015, 2016],
             '指標1': [1, 3, 5]})
        expect = pd.DataFrame.from_dict(
            {'企業名称': ['Sample1', 'Sample1'],
             '年度': [2015, 2016],
             '指標1_平残': [2.0, 4.0]})
        actual = calc_average(input, "指標1")
        assert_frame_equal(actual, expect, check_like=True)
