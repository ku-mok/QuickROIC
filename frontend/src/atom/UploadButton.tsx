import { Button, ButtonProps, CircularProgress } from "@mui/material";

export type UploadButtonProps = {
  disable: boolean;
  success?: boolean;
  loading?: boolean;
  successText?: string;
  handleButtonClick: ButtonProps["onClick"];
};

const UploadButton: React.FC<UploadButtonProps> = (props) => (
  <>
    <Button
      variant="contained"
      color={props.success ? "success" : "primary"}
      disabled={props.disable || props.loading}
      onClick={props.handleButtonClick}
      fullWidth
    >
      {props.loading && <CircularProgress size={24} />}
      {!props.loading && !props.success && props.children}
      {props.success && props.successText}
    </Button>
  </>
);

export default UploadButton;
