import { useQuery } from "@apollo/client";
import { useTabItems } from "./tabItems";
import { CompanyData, GetLocalDataDocument } from "../generated/graphql";
import Template from "../template/Template";
import DataGrid from "react-data-grid";
import { useMemo, useState } from "react";
import rowGrouper from "lodash.groupby";
import { toTableColumn, toTableRow } from "../util/dataTransform";
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;
const Table: React.FC = () => {
  const [tableData, SetTableData] = useState<CompanyData[]>([]);
  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(new Set());
  useQuery(GetLocalDataDocument, {
    onCompleted: (data) => {
      SetTableData(data.localCompanyData);
      setExpandedGroupIds(
        new Set(data.localCompanyData.map((d) => d.companyName))
      );
    },
  });
  const rows = useMemo(() => toTableRow(tableData), [tableData]);
  const columns = useMemo(() => toTableColumn(tableData), [tableData]);
  const tabItems = useTabItems();
  return (
    <Template tabItems={tabItems} tabSelected={2}>
      <ButtonContainer>
        <Button startIcon={<Save />} variant="contained">
          Download As CSV
        </Button>
      </ButtonContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        style={{ height: "75vh" }}
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
