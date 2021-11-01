import Template from "../template/Template";
import { useRoicWacc, useTabItems, useModal } from "./hooks";
import DataGrid from "react-data-grid";
import { useMemo, useState } from "react";
import rowGrouper from "lodash.groupby";
import { toTableColumn, toTableRow } from "../util/dataTransform";
import { Button } from "@mui/material";
import { Save, PermDataSetting } from "@mui/icons-material";
import styled from "styled-components";
import ColumnFilterModal from "../organisms/ColumnFilterModal";
import { createCsvString } from "../util/createCsvString";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
  column-gap: 10px;
`;
const Table: React.FC = () => {
  const tabItems = useTabItems();
  // データの読み出しと計算
  const { data: tableData, loading, error } = useRoicWacc((data) =>
    setExpandedGroupIds(new Set(data.map((d) => d.companyName)))
  );
  //　モーダル関連
  const { modalOpen, handleModalOpen, handleModalClose } = useModal();
  // テーブル関連
  // テーブルの折りたたみ
  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(new Set());
  // テーブルの行列を作る
  const rows = useMemo(() => toTableRow(tableData), [tableData]);
  const allColumns = useMemo(
    () =>
      toTableColumn(tableData).filter(
        (x) => x.key !== "企業名称" && x.key !== "年度"
      ),
    [tableData]
  );
  const [columnFilter, setColumnFilter] = useState<string[] | undefined>();
  const handleFilterChange = (column: string | string[]) => {
    if (typeof column === "string") {
      setColumnFilter((prev) => {
        if (prev) {
          if (prev.includes(column)) {
            return prev.filter((f) => f !== column);
          } else {
            return [...prev, column];
          }
        } else {
          return [column];
        }
      });
    } else {
      setColumnFilter(column);
    }
  };
  const filteredColumns = useMemo(
    () => toTableColumn(tableData, columnFilter),
    [columnFilter, tableData]
  );
  // CSVダウンロード
  const handleDownloadClick = () => {
    const csvString = createCsvString(rows, filteredColumns);
    const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
    const blob = new Blob([bom, csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "QuickRoicOutput.csv";
    a.click();
    a.remove();
  };
  return (
    <Template
      tabItems={tabItems}
      tabSelected={2}
      loading={loading}
      error={error}
    >
      <ColumnFilterModal
        handleFilterChange={handleFilterChange}
        open={modalOpen}
        columns={allColumns.map((c) => c.name)}
        filter={columnFilter}
        onClose={handleModalClose}
      />
      <ButtonContainer>
        <Button
          startIcon={<PermDataSetting />}
          variant="contained"
          color="secondary"
          onClick={handleModalOpen}
        >
          表示カラムの設定
        </Button>
        <Button
          startIcon={<Save />}
          variant="contained"
          onClick={handleDownloadClick}
        >
          Download As CSV
        </Button>
      </ButtonContainer>
      <DataGrid
        rows={rows}
        columns={filteredColumns}
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
