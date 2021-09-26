import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CalcRoicWaccDocument,
  GetLocalDataDocument,
  CompanyData,
} from "../../generated/graphql";

export const useRoicWacc = (
  additionalCallBackFunc?: (data: CompanyData[]) => void
) => {
  const [data, setData] = useState<CompanyData[]>([]);
  // ローカルに保存されたエクセル読み取り結果を引っ張る
  useQuery(GetLocalDataDocument, {
    onCompleted: (queryResponse) => {
      const localCompanyData = queryResponse.localCompanyData;
      setData(localCompanyData);
      // ROIC計算を行う
      refetchRoic({ data: localCompanyData });
      additionalCallBackFunc && additionalCallBackFunc(localCompanyData);
    },
  });
  // ROICやドライバを計算するクエリ
  const { refetch: refetchRoic, loading, error } = useQuery(
    CalcRoicWaccDocument,
    {
      // ローカルの状態を読み込むまではとりあえず空配列を投げる
      variables: { data: [] },
      onCompleted: (queryResponse) => {
        // 既存データに取得したデータをマージして企業名称でソートをする
        setData((prevData) =>
          [
            ...prevData,
            ...queryResponse.calcRoic,
            ...queryResponse.calcDrivers,
          ].sort((a, b) =>
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
    }
  );
  return { data, loading, error };
};
