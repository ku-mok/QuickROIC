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
  //　モーダル関連
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);
  // ローカルに保存されたエクセル読み取り結果を引っ張る
  useQuery(GetLocalDataDocument, {
    onCompleted: (data) => {
      setTableData(data.localCompanyData);
      // 企業名称で畳んだのをデフォルトでは開いた状態にする
      setExpandedGroupIds(
        new Set(data.localCompanyData.map((d) => d.companyName))
      );
      // ROIC計算を行う
      refetchRoic({ data: data.localCompanyData });
    },
  });
  const [columnFilter, setColumnFilter] = useState<string[] | undefined>(
    undefined
  );
  // ROICやドライバを計算するクエリ
  const { refetch: refetchRoic } = useQuery(CalcRoicWaccDocument, {
    // ローカルの状態を読み込むまではとりあえず空配列を投げる
    variables: { data: [] },
    onCompleted: (data) => {
      // 既存データに取得したデータをマージして企業名称でソートをする
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
    // TODO: Error処理。バックエンド側も実装必要。
    onError: (err) => console.error(err),
  });
  // テーブル関連
  const [tableData, setTableData] = useState<CompanyData[]>([]);
  const [expandedGroupIds, setExpandedGroupIds] = useState<
    ReadonlySet<unknown>
  >(new Set());
  // テーブルの行列を作る
  const rows = useMemo(() => toTableRow(tableData), [tableData]);
  const columns = useMemo(
    () =>
      toTableColumn(tableData).filter(
        (x) => x.key !== "企業名称" && x.key !== "年度"
      ),
    [tableData]
  );
  const filteredColumns = useMemo(
    () => toTableColumn(tableData, columnFilter),
    [columnFilter, tableData]
  );
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
    <Template tabItems={tabItems} tabSelected={2}>
      <ColumnFilterModal
        handleFilterChange={handleFilterChange}
        open={modalOpen}
        columns={columns.map((c) => c.name)}
        filter={columnFilter}
        onClose={handleModalClose}
      />
      <ButtonContainer>
        <Button
          startIcon={<PermDataSetting />}
          variant="contained"
          color="secondary"
          onClick={() => setModalOpen(true)}
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
