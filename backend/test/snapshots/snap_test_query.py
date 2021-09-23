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
                'metrics': {
                    'metricsName': 'ROIC',
                    'metricsValues': [
                        0.08846763007002532,
                        0.07961900781964902,
                        0.07972336874683703,
                        0.07720239291794001,
                        0.079618976502896
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'WACC',
                    'metricsValues': [
                        0.045966340675574875,
                        0.045157123503469856,
                        0.05343825896339785,
                        0.056629884356578744,
                        0.05327218594485796
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'ROIC',
                    'metricsValues': [
                        0.06687625143391016,
                        0.0671072417447661,
                        0.06605667303699833,
                        0.07174397914943739,
                        0.07713473106963717
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'WACC',
                    'metricsValues': [
                        0.03199032629181395,
                        0.031977136041319375,
                        0.03209055725645915,
                        0.032286366407474655,
                        0.03238899371067369
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            }
        ]
    }
}

snapshots['QuerySnapshot::test_calc_roic_driver 1'] = {
    'data': {
        'calcDrivers': [
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'EBITDA',
                    'metricsValues': [
                        67,
                        3,
                        121,
                        189,
                        172
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'NOPAT',
                    'metricsValues': [
                        89958,
                        85355,
                        89951,
                        91020,
                        97242
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'NOPATマージン',
                    'metricsValues': [
                        0.10210572195208324,
                        0.09196765858777844,
                        0.09267337300540683,
                        0.0897789850891132,
                        0.09173167809672945
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'SPEEDA業界分類_x',
                    'metricsValues': [
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス'
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'SPEEDA業界分類_y',
                    'metricsValues': [
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス'
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': 'β',
                    'metricsValues': [
                        1.278444216673263,
                        1.278444216673263,
                        1.278444216673263,
                        1.278444216673263,
                        1.278444216673263
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '仕入債務回転率',
                    'metricsValues': [
                        13.808390423052476,
                        14.379710513832164,
                        14.739013594688586,
                        15.424455462091249,
                        15.4994583579128
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '企業価値',
                    'metricsValues': [
                        1257.805914,
                        727.508434,
                        4032.367684,
                        2275.93088,
                        76.12416
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '固定資産',
                    'metricsValues': [
                        878293,
                        888367,
                        913521,
                        918346,
                        900656
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '固定資産_平残',
                    'metricsValues': [
                        844417,
                        883330,
                        900944,
                        915933.5,
                        909501
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '固定資産回転率',
                    'metricsValues': [
                        1.043356540666519,
                        1.0506809459658337,
                        1.0773411000017759,
                        1.106874025243099,
                        1.165551219844728
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '売上債権',
                    'metricsValues': [
                        153860,
                        152891,
                        165256,
                        175275,
                        182354
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '売上債権_平残',
                    'metricsValues': [
                        147123.5,
                        153375.5,
                        159073.5,
                        170265.5,
                        178814.5
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '売上債権回転率',
                    'metricsValues': [
                        5.98835672071423,
                        6.051148977509445,
                        6.101732846765803,
                        5.954365388173176,
                        5.928322367593232
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '売上原価',
                    'metricsValues': [
                        586539,
                        621412,
                        652673,
                        692211,
                        722546
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '売上原価率',
                    'metricsValues': [
                        0.6657438810117272,
                        0.6695542927578768,
                        0.672426191810629,
                        0.6827730284280392,
                        0.6816021583480336
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '売上高合計',
                    'metricsValues': [
                        881028,
                        928098,
                        970624,
                        1013823,
                        1060070
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '投下資本',
                    'metricsValues': [
                        1046359,
                        1097727,
                        1158851,
                        1199107,
                        1243577
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '投下資本_平残',
                    'metricsValues': [
                        1016846.5,
                        1072043,
                        1128289,
                        1178979,
                        1221342
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '投下資本回転率',
                    'metricsValues': [
                        0.8664316590557178,
                        0.8657283336582581,
                        0.8602618655326782,
                        0.8599160799301768,
                        0.8679550854715551
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '支払利息割引料',
                    'metricsValues': [
                        13,
                        10,
                        6,
                        5,
                        4
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '時価総額(自己株式調整後)',
                    'metricsValues': [
                        1904.805914,
                        1376.508434,
                        4678.367684,
                        3157.93088,
                        1121.12416
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '有利子負債残高',
                    'metricsValues': [
                        901,
                        781,
                        576,
                        571,
                        398
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '棚卸資産',
                    'metricsValues': [
                        62856,
                        61698,
                        81122,
                        77994,
                        67542
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '棚卸資産_平残',
                    'metricsValues': [
                        61272,
                        62277,
                        71410,
                        79558,
                        72768
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '棚卸資産回転率',
                    'metricsValues': [
                        14.378965922444184,
                        14.902740979815983,
                        13.592269990197451,
                        12.743193644888006,
                        14.567804529463501
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '現預金及び同等物',
                    'metricsValues': [
                        228458,
                        302364,
                        317267,
                        350319,
                        414199
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '販売費及び一般管理費',
                    'metricsValues': [
                        165906,
                        175636,
                        182502,
                        191397,
                        194664
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '販管費率',
                    'metricsValues': [
                        0.1883095656437707,
                        0.18924294632678876,
                        0.18802543518396414,
                        0.1887873918820149,
                        0.183633156300999
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '買入債務',
                    'metricsValues': [
                        41794,
                        44635,
                        43929,
                        45826,
                        47409
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample1',
                'metrics': {
                    'metricsName': '買入債務_平残',
                    'metricsValues': [
                        42477,
                        43214.5,
                        44282,
                        44877.5,
                        46617.5
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'EBITDA',
                    'metricsValues': [
                        180711,
                        191107,
                        196771,
                        193820,
                        207996
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'NOPAT',
                    'metricsValues': [
                        17752,
                        18141,
                        19218,
                        21471,
                        24151
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'NOPATマージン',
                    'metricsValues': [
                        0.04649335547302642,
                        0.043888489704676265,
                        0.04407980145969329,
                        0.04840880652034225,
                        0.05248870941801886
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'SPEEDA業界分類_x',
                    'metricsValues': [
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス'
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'SPEEDA業界分類_y',
                    'metricsValues': [
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス',
                        '警備保障サービス'
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': 'β',
                    'metricsValues': [
                        0.6635326712213828,
                        0.6635326712213828,
                        0.6635326712213828,
                        0.6635326712213828,
                        0.6635326712213828
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '仕入債務回転率',
                    'metricsValues': [
                        12.154335309787745,
                        14.113927500681385,
                        14.739017972617402,
                        14.401008338181112,
                        14.284111840062915
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '企業価値',
                    'metricsValues': [
                        1776146.996838,
                        1613291.908343,
                        1600218.15456,
                        1897230.657664,
                        1720488.91934
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '固定資産',
                    'metricsValues': [
                        161548,
                        186250,
                        200319,
                        202066,
                        199309
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '固定資産_平残',
                    'metricsValues': [
                        162483,
                        173899,
                        193284.5,
                        201192.5,
                        200687.5
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '固定資産回転率',
                    'metricsValues': [
                        2.3498950659453604,
                        2.376914185820505,
                        2.255649056184019,
                        2.2045304869714326,
                        2.2927088134537525
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '売上債権',
                    'metricsValues': [
                        45643,
                        50118,
                        52286,
                        54926,
                        56043
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '売上債権_平残',
                    'metricsValues': [
                        44831.5,
                        47880.5,
                        51202,
                        53606,
                        55484.5
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '売上債権回転率',
                    'metricsValues': [
                        8.51673488506965,
                        8.63280458641827,
                        8.514940822624116,
                        8.273980524568145,
                        8.292730402184393
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '売上原価',
                    'metricsValues': [
                        282880,
                        310704,
                        330493,
                        334197,
                        345097
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '売上原価率',
                    'metricsValues': [
                        0.7408765432745444,
                        0.7516856460615035,
                        0.7580427632333445,
                        0.7534850688220772,
                        0.7500184735220096
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '売上高合計',
                    'metricsValues': [
                        381818,
                        413343,
                        435982,
                        443535,
                        460118
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '投下資本',
                    'metricsValues': [
                        252830,
                        287827,
                        294037,
                        304508,
                        321695
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '投下資本_平残',
                    'metricsValues': [
                        265445.5,
                        270328.5,
                        290932,
                        299272.5,
                        313101.5
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '投下資本回転率',
                    'metricsValues': [
                        1.4384044935777778,
                        1.5290396684034424,
                        1.4985701126036324,
                        1.4820439565947423,
                        1.469549012061584
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '支払利息割引料',
                    'metricsValues': [
                        896,
                        974,
                        775,
                        788,
                        780
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '時価総額(自己株式調整後)',
                    'metricsValues': [
                        1825978.996838,
                        1739315.908343,
                        1728618.15456,
                        2069544.657664,
                        1958668.91934
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '有利子負債残高',
                    'metricsValues': [
                        103215,
                        84474,
                        77638,
                        73153,
                        71083
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '棚卸資産',
                    'metricsValues': [
                        6586,
                        5826,
                        6164,
                        5859,
                        7415
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '棚卸資産_平残',
                    'metricsValues': [
                        5869,
                        6206,
                        5995,
                        6011.5,
                        6637
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '棚卸資産回転率',
                    'metricsValues': [
                        65.05673879706934,
                        66.60377054463423,
                        72.72427022518765,
                        73.78108625135158,
                        69.32620159710713
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '現預金及び同等物',
                    'metricsValues': [
                        115892,
                        122332,
                        116288,
                        126421,
                        143885
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '販売費及び一般管理費',
                    'metricsValues': [
                        69901,
                        74217,
                        75378,
                        77057,
                        78224
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '販管費率',
                    'metricsValues': [
                        0.18307413479720705,
                        0.17955305883975295,
                        0.17289245886298057,
                        0.17373375269144486,
                        0.17000856302079032
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '買入債務',
                    'metricsValues': [
                        22602,
                        21426,
                        23420,
                        22993,
                        25326
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            },
            {
                'companyName': 'Sample2',
                'metrics': {
                    'metricsName': '買入債務_平残',
                    'metricsValues': [
                        23274,
                        22014,
                        22423,
                        23206.5,
                        24159.5
                    ],
                    'metricsYears': [
                        2015,
                        2016,
                        2017,
                        2018,
                        2019
                    ]
                }
            }
        ]
    }
}
