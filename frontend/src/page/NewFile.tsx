import { useTabItems } from "./hooks/useTabItems";
import React, { useState } from "react";
import { useMutation, useReactiveVar } from "@apollo/client";
import Template from "../template/Template";
import FileUploader from "../organisms/FileUploader";
import { useHistory } from "react-router";
import { UploadExcelDocument } from "../generated/graphql";
import {
  companySettingVar,
  isDataLoadedVar,
  localCompanyDataVar,
} from "../store";

export type NewFilePresProps = {
  acceptedFiles: File[];
  setAcceptedFiles: (files: File[]) => void;
  handleUpload: () => void;
  successText?: string;
  errorText?: string;
  loading: boolean;
};

export const NewFilePres: React.FC<NewFilePresProps> = (props) => {
  const isDataLoaded = useReactiveVar(isDataLoadedVar);
  const tabItems = useTabItems(isDataLoaded);
  return (
    <Template tabItems={tabItems} tabSelected={1}>
      <FileUploader {...props} />
    </Template>
  );
};

const NewFile: React.FC = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const history = useHistory();
  const [uploadFunc, { data, loading, error }] = useMutation(
    UploadExcelDocument,
    {
      onCompleted(data) {
        const localData = data.uploadSpeedaExcel?.companyData.map((d) => {
          const { __typename: __data, ...others } = d;
          const { __typename: __metrics, ...othersMetrics } = d.metrics;
          others.metrics = othersMetrics;
          return others;
        });
        localCompanyDataVar(localData);
        isDataLoadedVar(true);
        const colors = [
          "#4E79A7",
          "#A0CBE8",
          "#F28E2B",
          "#FFBE7D",
          "#59A14F",
          "#8CD17D",
          "#B6992D",
          "#F1CE63",
          "#499894",
          "#86BCB6",
          "#E15759",
          "#FF9D9A",
          "#79706E",
          "#BAB0AC",
          "#D37295",
          "#FABFD2",
          "#B07AA1",
          "#D4A6C8",
          "#9d7660",
          "#D7B5A6",
        ];
        companySettingVar(
          [...new Set(localData?.map((d) => d.companyName))].map((d, i) => ({
            name: d,
            visibility: true,
            color: colors[i % colors.length],
          }))
        );
        console.info(localData);
        window.setTimeout(() => history.push("/table"), 800);
      },
      onError(error) {
        console.error(error.message);
      },
    }
  );
  const handleUpload = async () => {
    await uploadFunc({ variables: { files: acceptedFiles } });
  };
  return (
    <NewFilePres
      {...{
        acceptedFiles,
        setAcceptedFiles,
        handleUpload,
        successText: !!(!error && data)
          ? `${
              new Set(
                data?.uploadSpeedaExcel?.companyData?.map((c) => c.companyName)
              ).size
            }社のデータを読み取りました。データ確認画面に遷移します。`
          : undefined,
        loading,
        errorText: error
          ? `エラーが発生しました(${error.message})。ファイルを確認の上解決しない場合は連絡をください。`
          : undefined,
      }}
    />
  );
};

export default NewFile;
