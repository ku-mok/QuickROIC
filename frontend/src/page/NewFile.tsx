import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Template from "../template/Template";
import { Typography } from "@mui/material";
import UploadButton from "../atom/UploadButton";
import UploadArea from "../molecules/UploadArea";
import gql from "graphql-tag";
import { useHistory } from "react-router";
import { UploadExcelDocument } from "../generated/graphql";

export const UPLOAD_EXCEL = gql`
  mutation UploadExcel($files: [Upload!]!) {
    uploadSpeedaExcel(files: $files) {
      companyData {
        companyName
        metrics {
          year
          value
          metricsName
        }
      }
    }
  }
`;
export type NewFilePresProps = {
  acceptedFiles: File[];
  setAcceptedFiles: (files: File[]) => void;
  handleUpload: () => void;
  successText?: string;
  errorText?: string;
  loading: boolean;
};

export const NewFilePres: React.FC<NewFilePresProps> = (props) => {
  return (
    <Template>
      <Typography variant="h5">新規データ分析</Typography>
      <UploadArea
        acceptedFiles={props.acceptedFiles}
        setAcceptedFiles={props.setAcceptedFiles}
      />
      <UploadButton
        successText={props.successText}
        errorText={props.errorText}
        loading={props.loading}
        disable={props.acceptedFiles.length === 0}
        handleButtonClick={props.handleUpload}
      >
        アップロードして分析を実施
      </UploadButton>
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
        // TODO: ローカルの状態を更新する
        console.info(data);
        window.setTimeout(() => history.push("/table"), 1500);
      },
      onError(error) {},
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
