import React from "react";
import UploadButton from "../atom/UploadButton";
import UploadArea from "../molecules/UploadArea";

export type FileUploaderProps = {
  acceptedFiles: File[];
  setAcceptedFiles: (files: File[]) => void;
  handleUpload: () => void;
  successText?: string;
  errorText?: string;
  loading: boolean;
};

const FileUploader: React.FC<FileUploaderProps> = (props) => {
  return (
    <>
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
    </>
  );
};
export default FileUploader;
