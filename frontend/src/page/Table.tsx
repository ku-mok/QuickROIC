import { useQuery } from "@apollo/client";
import { useTabItems } from "./tabItems";
import {
  CalcRoicWaccDocument,
  CompanyData,
  GetLocalDataDocument,
} from "../generated/graphql";
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
  const [tableData, setTableData] = useState<CompanyData[]>([]);
  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(new Set());
  const { refetch: refetchRoic } = useQuery(CalcRoicWaccDocument, {
    variables: { data: [] },
    onCompleted: (data) => {
      setTableData((prevData) =>
        [...prevData, ...data.calcRoic, ...data.calcDrivers].sort((a, b) =>
          a.companyName === b.companyName
            ? 0
            : a.companyName > b.companyName
            ? 1
            : -1
        )
      );
    },
    onError: (err) => console.error(err),
  });
  useQuery(GetLocalDataDocument, {
    onCompleted: (data) => {
      setTableData(data.localCompanyData);
      setExpandedGroupIds(
        new Set(data.localCompanyData.map((d) => d.companyName))
      );
      refetchRoic({ data: data.localCompanyData });
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
