import { CompanyData } from "../generated/graphql";
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
