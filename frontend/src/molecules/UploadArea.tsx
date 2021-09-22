import { useDropzone } from "react-dropzone";
import { Paper } from "@mui/material";
import styled from "styled-components";
export type UploadAreaProps = {
  acceptedFiles: File[];
  setAcceptedFiles: (files: File[]) => void;
};

const StyledPaper = styled(Paper)`
  height: 50vh;
  margin: 1ex auto;
`;
const GuideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const UploadArea: React.FC<UploadAreaProps> = (props) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".xlsx",
    onDropAccepted: (files: File[]) => props.setAcceptedFiles(files),
  });
  const { ref, ...rootProps } = getRootProps();
  return (
    <div ref={ref}>
      <StyledPaper {...rootProps} elevation={3}>
        <input {...getInputProps()} data-testid="dropzone" />
        {props.acceptedFiles.length === 0 ? (
          <GuideText>
            分析対象のファイルをドラッグアンドドロップするかクリックして選択してください
          </GuideText>
        ) : (
          <GuideText>
            <ol>
              {props.acceptedFiles.map((f) => (
                <li key={f.name}>{f.name}</li>
              ))}
            </ol>
          </GuideText>
        )}
      </StyledPaper>
    </div>
  );
};
export default UploadArea;
