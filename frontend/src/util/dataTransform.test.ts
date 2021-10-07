import { toScatterData, toTableColumn, toTableRow } from "./dataTransform";
const data = [
  {
    companyName: "Sample1",
    metrics: {
      metricsName: "SPEEDA業界分類",
      metricsValues: [
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
      ],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample1",
    metrics: {
      metricsName: "β",
      metricsValues: [
        1.278444216673263,
        1.278444216673263,
        1.278444216673263,
        1.278444216673263,
        1.278444216673263,
        1.278444216673263,
      ],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample1",
    metrics: {
      metricsName: "支払利息割引料",
      metricsValues: [15, 13, 10, 6, 5, 4],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample1",
    metrics: {
      metricsName: "有利子負債残高",
      metricsValues: [1092, 901, 781, 576, 571, 398],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample2",
    metrics: {
      metricsName: "SPEEDA業界分類",
      metricsValues: [
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
      ],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample2",
    metrics: {
      metricsName: "β",
      metricsValues: [
        0.6635326712213828,
        0.6635326712213828,
        0.6635326712213828,
        0.6635326712213828,
        0.6635326712213828,
        0.6635326712213828,
      ],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample2",
    metrics: {
      metricsName: "支払利息割引料",
      metricsValues: [946, 896, 974, 775, 788, 780],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample2",
    metrics: {
      metricsName: "有利子負債残高",
      metricsValues: [79993, 103215, 84474, 77638, 73153, 71083],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample3",
    metrics: {
      metricsName: "SPEEDA業界分類",
      metricsValues: [
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
        "警備保障サービス",
      ],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample3",
    metrics: {
      metricsName: "β",
      metricsValues: [
        0.49068521681446403,
        0.49068521681446403,
        0.49068521681446403,
        0.49068521681446403,
        0.49068521681446403,
        0.49068521681446403,
      ],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample3",
    metrics: {
      metricsName: "支払利息割引料",
      metricsValues: [9, 6, 1, 1, 1, 1],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
  {
    companyName: "Sample3",
    metrics: {
      metricsName: "有利子負債残高",
      metricsValues: [78, 52, 46, 45, 45, 44],
      metricsYears: [2014, 2015, 2016, 2017, 2018, 2019],
    },
  },
];
describe("table transform", () => {
  it("create columns data", () => {
    const expected = [
      "企業名称",
      "年度",
      "SPEEDA業界分類",
      "β",
      "有利子負債残高",
      "支払利息割引料",
    ].map((c) => ({ key: c, name: c }));
    expect(toTableColumn(data)).toEqual(expect.arrayContaining(expected));
    expect(toTableColumn(data).length).toEqual(expected.length);
  });

  it("filter columns", () => {
    const expected = [
      "企業名称",
      "年度",
      "有利子負債残高",
      "支払利息割引料",
    ].map((c) => ({ key: c, name: c }));
    const filter = ["SPEEDA業界分類", "β"];
    expect(toTableColumn(data, filter)).toEqual(
      expect.arrayContaining(expected)
    );
    expect(toTableColumn(data, filter).length).toEqual(expected.length);
  });
  it("create row data", () => {
    const expected = [
      {
        企業名称: "Sample1",
        年度: 2014,
        支払利息割引料: 15,
        有利子負債残高: 1092,
        β: 1.278444216673263,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample1",
        年度: 2015,
        支払利息割引料: 13,
        有利子負債残高: 901,
        β: 1.278444216673263,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample1",
        年度: 2016,
        支払利息割引料: 10,
        有利子負債残高: 781,
        β: 1.278444216673263,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample1",
        年度: 2017,
        支払利息割引料: 6,
        有利子負債残高: 576,
        β: 1.278444216673263,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample1",
        年度: 2018,
        支払利息割引料: 5,
        有利子負債残高: 571,
        β: 1.278444216673263,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample1",
        年度: 2019,
        支払利息割引料: 4,
        有利子負債残高: 398,
        β: 1.278444216673263,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample2",
        年度: 2014,
        支払利息割引料: 946,
        有利子負債残高: 79993,
        β: 0.6635326712213828,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample2",
        年度: 2015,
        支払利息割引料: 896,
        有利子負債残高: 103215,
        β: 0.6635326712213828,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample2",
        年度: 2016,
        支払利息割引料: 974,
        有利子負債残高: 84474,
        β: 0.6635326712213828,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample2",
        年度: 2017,
        支払利息割引料: 775,
        有利子負債残高: 77638,
        β: 0.6635326712213828,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample2",
        年度: 2018,
        支払利息割引料: 788,
        有利子負債残高: 73153,
        β: 0.6635326712213828,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample2",
        年度: 2019,
        支払利息割引料: 780,
        有利子負債残高: 71083,
        β: 0.6635326712213828,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample3",
        年度: 2014,
        支払利息割引料: 9,
        有利子負債残高: 78,
        β: 0.49068521681446403,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample3",
        年度: 2015,
        支払利息割引料: 6,
        有利子負債残高: 52,
        β: 0.49068521681446403,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample3",
        年度: 2016,
        支払利息割引料: 1,
        有利子負債残高: 46,
        β: 0.49068521681446403,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample3",
        年度: 2017,
        支払利息割引料: 1,
        有利子負債残高: 45,
        β: 0.49068521681446403,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample3",
        年度: 2018,
        支払利息割引料: 1,
        有利子負債残高: 45,
        β: 0.49068521681446403,
        SPEEDA業界分類: "警備保障サービス",
      },
      {
        企業名称: "Sample3",
        年度: 2019,
        支払利息割引料: 1,
        有利子負債残高: 44,
        β: 0.49068521681446403,
        SPEEDA業界分類: "警備保障サービス",
      },
    ];
    expect(toTableRow(data)).toEqual(expect.arrayContaining(expected));
  });
});

describe("graph tranform", () => {
  it("transform scatter", () => {
    const actual = toScatterData(data, "支払利息割引料", "有利子負債残高", 0, {
      Sample1: "red",
      Sample2: "blue",
      Sample3: "green",
    });
    const expected = [
      {
        x: [15],
        y: [1092],
        type: "scatter",
        mode: "text+markers",
        name: "Sample1",
        text: "Sample1",
        textposition: "top center",
        marker: { size: 15, color: "red" },
      },
      {
        x: [946],
        y: [79993],
        type: "scatter",
        mode: "text+markers",
        name: "Sample2",
        text: "Sample2",
        textposition: "top center",
        marker: { size: 15, color: "blue" },
      },
      {
        x: [9],
        y: [78],
        type: "scatter",
        mode: "text+markers",
        name: "Sample3",
        text: "Sample3",
        textposition: "top center",
        marker: { size: 15, color: "green" },
      },
    ];
    expect(actual).toEqual(expect.arrayContaining(expected));
    expect(actual.length).toEqual(expected.length);
  });
});
