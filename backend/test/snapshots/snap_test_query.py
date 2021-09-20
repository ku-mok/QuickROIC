# -*- coding: utf-8 -*-
# snapshottest: v1 - https://goo.gl/zC4yUc
from __future__ import unicode_literals

from snapshottest import Snapshot


snapshots = Snapshot()

snapshots['QuerySnapshot::test_calc_roic 1'] = {
    'data': {
        'calcRoic': [
            {
                'companyName': 'Sample1',
                'metrics': [
                    {
                        'metricsName': 'ROIC',
                        'value': 0.08846763007002532,
                        'year': 2015
                    },
                    {
                        'metricsName': 'WACC',
                        'value': 0.045966340675574875,
                        'year': 2015
                    },
                    {
                        'metricsName': 'ROIC',
                        'value': 0.07961900781964902,
                        'year': 2016
                    },
                    {
                        'metricsName': 'WACC',
                        'value': 0.045157123503469856,
                        'year': 2016
                    }
                ]
            }
        ]
    }
}

snapshots['QuerySnapshot::test_calc_roic_driver 1'] = {
    'data': {
        'calcDrivers': [
            {
                'companyName': 'Sample1',
                'metrics': [
                    {
                        'metricsName': 'EBITDA',
                        'value': 88.0,
                        'year': 2014
                    },
                    {
                        'metricsName': 'NOPAT',
                        'value': 80496.0,
                        'year': 2014
                    },
                    {
                        'metricsName': 'NOPATマージン',
                        'value': 0.09574627522534203,
                        'year': 2014
                    },
                    {
                        'metricsName': 'β',
                        'value': 1.278444216673263,
                        'year': 2014
                    },
                    {
                        'metricsName': '企業価値',
                        'value': 1429.21471,
                        'year': 2014
                    },
                    {
                        'metricsName': '固定資産',
                        'value': 810541.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '売上債権',
                        'value': 140387.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '売上原価',
                        'value': 557884.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '売上原価率',
                        'value': 0.6635772585943986,
                        'year': 2014
                    },
                    {
                        'metricsName': '売上高合計',
                        'value': 840722.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '投下資本',
                        'value': 987334.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '支払利息割引料',
                        'value': 15.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '時価総額(自己株式調整後)',
                        'value': 2157.21471,
                        'year': 2014
                    },
                    {
                        'metricsName': '有利子負債残高',
                        'value': 1092.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '棚卸資産',
                        'value': 59688.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '現預金及び同等物',
                        'value': 247721.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '販売費及び一般管理費',
                        'value': 159222.0,
                        'year': 2014
                    },
                    {
                        'metricsName': '販管費率',
                        'value': 0.1893872171776164,
                        'year': 2014
                    },
                    {
                        'metricsName': '買入債務',
                        'value': 43160.0,
                        'year': 2014
                    },
                    {
                        'metricsName': 'EBITDA',
                        'value': 67.0,
                        'year': 2015
                    },
                    {
                        'metricsName': 'NOPAT',
                        'value': 89958.0,
                        'year': 2015
                    },
                    {
                        'metricsName': 'NOPATマージン',
                        'value': 0.10210572195208324,
                        'year': 2015
                    },
                    {
                        'metricsName': 'β',
                        'value': 1.278444216673263,
                        'year': 2015
                    },
                    {
                        'metricsName': '仕入債務回転率',
                        'value': 13.808390423052476,
                        'year': 2015
                    },
                    {
                        'metricsName': '企業価値',
                        'value': 1257.805914,
                        'year': 2015
                    },
                    {
                        'metricsName': '固定資産',
                        'value': 878293.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '固定資産_平残',
                        'value': 844417.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '固定資産回転率',
                        'value': 1.043356540666519,
                        'year': 2015
                    },
                    {
                        'metricsName': '売上債権',
                        'value': 153860.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '売上債権_平残',
                        'value': 147123.5,
                        'year': 2015
                    },
                    {
                        'metricsName': '売上債権回転率',
                        'value': 5.98835672071423,
                        'year': 2015
                    },
                    {
                        'metricsName': '売上原価',
                        'value': 586539.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '売上原価率',
                        'value': 0.6657438810117272,
                        'year': 2015
                    },
                    {
                        'metricsName': '売上高合計',
                        'value': 881028.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '投下資本',
                        'value': 1046359.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '投下資本_平残',
                        'value': 1016846.5,
                        'year': 2015
                    },
                    {
                        'metricsName': '投下資本回転率',
                        'value': 0.8664316590557178,
                        'year': 2015
                    },
                    {
                        'metricsName': '支払利息割引料',
                        'value': 13.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '時価総額(自己株式調整後)',
                        'value': 1904.805914,
                        'year': 2015
                    },
                    {
                        'metricsName': '有利子負債残高',
                        'value': 901.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '棚卸資産',
                        'value': 62856.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '棚卸資産_平残',
                        'value': 61272.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '棚卸資産回転率',
                        'value': 14.378965922444184,
                        'year': 2015
                    },
                    {
                        'metricsName': '現預金及び同等物',
                        'value': 228458.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '販売費及び一般管理費',
                        'value': 165906.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '販管費率',
                        'value': 0.1883095656437707,
                        'year': 2015
                    },
                    {
                        'metricsName': '買入債務',
                        'value': 41794.0,
                        'year': 2015
                    },
                    {
                        'metricsName': '買入債務_平残',
                        'value': 42477.0,
                        'year': 2015
                    },
                    {
                        'metricsName': 'EBITDA',
                        'value': 3.0,
                        'year': 2016
                    },
                    {
                        'metricsName': 'NOPAT',
                        'value': 85355.0,
                        'year': 2016
                    },
                    {
                        'metricsName': 'NOPATマージン',
                        'value': 0.09196765858777844,
                        'year': 2016
                    },
                    {
                        'metricsName': 'β',
                        'value': 1.278444216673263,
                        'year': 2016
                    },
                    {
                        'metricsName': '仕入債務回転率',
                        'value': 14.379710513832164,
                        'year': 2016
                    },
                    {
                        'metricsName': '企業価値',
                        'value': 727.508434,
                        'year': 2016
                    },
                    {
                        'metricsName': '固定資産',
                        'value': 888367.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '固定資産_平残',
                        'value': 883330.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '固定資産回転率',
                        'value': 1.0506809459658337,
                        'year': 2016
                    },
                    {
                        'metricsName': '売上債権',
                        'value': 152891.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '売上債権_平残',
                        'value': 153375.5,
                        'year': 2016
                    },
                    {
                        'metricsName': '売上債権回転率',
                        'value': 6.051148977509445,
                        'year': 2016
                    },
                    {
                        'metricsName': '売上原価',
                        'value': 621412.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '売上原価率',
                        'value': 0.6695542927578768,
                        'year': 2016
                    },
                    {
                        'metricsName': '売上高合計',
                        'value': 928098.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '投下資本',
                        'value': 1097727.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '投下資本_平残',
                        'value': 1072043.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '投下資本回転率',
                        'value': 0.8657283336582581,
                        'year': 2016
                    },
                    {
                        'metricsName': '支払利息割引料',
                        'value': 10.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '時価総額(自己株式調整後)',
                        'value': 1376.508434,
                        'year': 2016
                    },
                    {
                        'metricsName': '有利子負債残高',
                        'value': 781.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '棚卸資産',
                        'value': 61698.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '棚卸資産_平残',
                        'value': 62277.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '棚卸資産回転率',
                        'value': 14.902740979815983,
                        'year': 2016
                    },
                    {
                        'metricsName': '現預金及び同等物',
                        'value': 302364.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '販売費及び一般管理費',
                        'value': 175636.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '販管費率',
                        'value': 0.18924294632678876,
                        'year': 2016
                    },
                    {
                        'metricsName': '買入債務',
                        'value': 44635.0,
                        'year': 2016
                    },
                    {
                        'metricsName': '買入債務_平残',
                        'value': 43214.5,
                        'year': 2016
                    }
                ]
            }
        ]
    }
}
