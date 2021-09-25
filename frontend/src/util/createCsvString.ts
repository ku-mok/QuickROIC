export function createCsvString(
  rows: { [key: string]: any }[],
  columns: { key: string }[]
) {
  const lines = [
    columns.map((c) => c.key).join(","),
    ...rows.map((row) =>
      columns
        .reduce((prev, current) => (prev += row[current.key] + ","), "")
        .slice(0, -1)
    ),
  ];
  return lines.join("\n");
}
