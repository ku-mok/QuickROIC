import { useTabItems } from "./tabItems";
import React, { useState } from "react";
import { useMutation, useReactiveVar } from "@apollo/client";
import Template from "../template/Template";
import FileUploader from "../organisms/FileUploader";
import { useHistory } from "react-router";
import { UploadExcelDocument } from "../generated/graphql";
import { isDataLoadedVar, localCompanyDataVar } from "../store";

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
        console.info(localData);
        window.setTimeout(() => history.push("/table"), 1500);
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
          ? `${data?.uploadSpeedaExcel?.companyData?.length}社のデータを読み取りました。データ確認画面に遷移します。`
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
