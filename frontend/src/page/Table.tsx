import { useQuery } from "@apollo/client";
import { GetLocalDataDocument } from "../generated/graphql";
import Template from "../template/Template";
import DataGrid from "react-data-grid";
import { useMemo, useState } from "react";
import rowGrouper from "lodash.groupby";
import { toTableColumn, toTableRow } from "../util/dataTransform";

const Table: React.FC = () => {
  const { data } = useQuery(GetLocalDataDocument);
  const rows = useMemo(() => (data ? toTableRow(data.localCompanyData) : []), [
    data,
  ]);
  const columns = useMemo(
    () => (data ? toTableColumn(data.localCompanyData) : []),
    [data]
  );
  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(() => new Set<unknown>(data?.localCompanyData.map((d) => d.companyName)));
  return (
    <Template>
      <DataGrid
        rows={rows}
        columns={columns}
        style={{ height: "85vh" }}
        groupBy={["企業名称"]}
        rowGrouper={rowGrouper}
        className="rdg-light"
        expandedGroupIds={expandedGroupIds}
        onExpandedGroupIdsChange={setExpandedGroupIds}
        defaultColumnOptions={{ resizable: true }}
      />
    </Template>
  );
};
export default Table;
