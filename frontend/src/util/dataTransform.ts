import { CompanyData } from "../generated/graphql";
import { Data } from "plotly.js";
export function toTableColumn(
  data: CompanyData[],
  filter: string[] | undefined = undefined
) {
  const columns = [
    "企業名称",
    "年度",
    ...new Set(data.map((d) => d.metrics.metricsName)),
  ].map((c) => ({ key: c, name: c }));
  if (filter) {
    return columns.filter((x) => ![...filter].includes(x.key));
  } else {
    return columns;
  }
}

export function toTableRow(data: CompanyData[]) {
  /*
   フロントエンドにこの複雑なロジックがあるのはあまりイケていない気がしている
   ただバックエンドに流すとしてもデータ構造（不特定のキーのObjectのList）がGraphQLと嚙み合わないので、
   文字列でもらってJSON.parseするそれはそれでイケていないやり方になる
   そもそもGraphQLと今回の要件が嚙み合わない気もする
  */
  const yearCompanyMap = new Map(
    [
      ...new Set(
        data.flatMap((d) =>
          d.metrics.metricsYears.reduce(
            (prev, year) => [
              ...prev,
              JSON.stringify({
                year: year,
                companyName: d.companyName,
              }),
            ],
            [] as string[]
          )
        )
      ),
    ].map((t) => [t, [] as { [key: string]: any }[]])
  );
  data.forEach((d) =>
    d.metrics.metricsYears.forEach((year, i) => {
      yearCompanyMap
        .get(JSON.stringify({ year: year, companyName: d.companyName }))
        ?.push({ [d.metrics.metricsName]: d.metrics.metricsValues[i] });
    })
  );
  const rows = [] as { [key: string]: any }[];
  yearCompanyMap.forEach((value, key) => {
    const row = value.reduce((prev, current) => {
      return Object.assign(prev, current);
    }, {});
    const yearCompanyName = JSON.parse(key);
    Object.assign(row, {
      企業名称: yearCompanyName.companyName,
      年度: yearCompanyName.year,
    });
    rows.push(row);
  });
  return rows;
}

export function toScatterData(
  data: CompanyData[],
  x: string,
  y: string,
  yearIndex: number,
  companyColor: { [company: string]: number | string }
): Data[] {
  const companies = [...new Set(data.map((d) => d.companyName))];
  const xAxisData = data
    .filter((d) => d.metrics.metricsName === x)
    .reduce(
      (prev, current) =>
        prev.set(current.companyName, current.metrics.metricsValues[yearIndex]),
      new Map()
    );
  const yAxisData = data
    .filter((d) => d.metrics.metricsName === y)
    .reduce(
      (prev, current) =>
        prev.set(current.companyName, current.metrics.metricsValues[yearIndex]),
      new Map()
    );
  return companies.map((company) => ({
    x: [xAxisData.get(company)],
    y: [yAxisData.get(company)],
    type: "scatter",
    mode: "text+markers",
    name: company,
    text: company,
    textposition: "top center",
    marker: { size: 15, color: companyColor[company] },
  }));
}

export function toTreeData(
  data: CompanyData[],
  companyColor: { [company: string]: number | string }
): Data[] {
  const metrics_position: {
    [metric: string]: { xaxis: string; yaxis: string };
  } = {
    ROIC: { xaxis: "x", yaxis: "y" },
    投下資本回転率: { xaxis: "x2", yaxis: "y2" },
    NOPATマージン: { xaxis: "x2", yaxis: "y3" },
    固定資産回転率: { xaxis: "x3", yaxis: "y4" },
    運転資本回転率: { xaxis: "x3", yaxis: "y5" },
    販管費率: { xaxis: "x3", yaxis: "y6" },
    売上原価率: { xaxis: "x3", yaxis: "y7" },
  };
  return [
    "ROIC",
    "投下資本回転率",
    "NOPATマージン",
    "固定資産回転率",
    "運転資本回転率",
    "販管費率",
    "売上原価率",
  ].flatMap((metricsName) =>
    data
      .filter((d) => d.metrics.metricsName === metricsName)
      .map((d) => ({
        x: d.metrics.metricsYears,
        y: d.metrics.metricsValues,
        type: "scatter",
        mode: "lines+markers",
        xaxis: metrics_position[d.metrics.metricsName].xaxis,
        yaxis: metrics_position[d.metrics.metricsName].yaxis,
        marker: { color: companyColor[d.companyName] },
      }))
  );
}
