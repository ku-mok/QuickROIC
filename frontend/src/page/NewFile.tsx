import React, { useState } from "react";
import Template from "../template/Template";
import { Typography } from "@mui/material";
import UploadButton from "../atom/UploadButton";
import UploadArea from "../molecules/UploadArea";

export type NewFilePresProps = {
  acceptedFiles: File[];
  setAcceptedFiles: (files: File[]) => void;
  handleUpload: () => void;
  success: boolean;
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
        success={props.success}
        loading={props.loading}
        successText="分析が完了しました"
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
  const success = true;
  const loading = true;
  const handleUpload = () => {
    //TODO: ファイルのアップロード処理
  };
  return (
    <NewFilePres
      {...{
        acceptedFiles,
        setAcceptedFiles,
        handleUpload,
        success,
        loading,
      }}
    />
  );
};

export default NewFile;
