import { Button, ButtonProps, CircularProgress } from "@mui/material";

export type UploadButtonProps = {
  disable: boolean;
  loading?: boolean;
  successText?: string;
  errorText?: string;
  handleButtonClick: ButtonProps["onClick"];
};

const UploadButton: React.FC<UploadButtonProps> = (props) => (
  <>
    <Button
      variant="contained"
      color={
        props.successText ? "success" : props.errorText ? "error" : "primary"
      }
      disabled={props.disable || props.loading}
      onClick={props.handleButtonClick}
      fullWidth
    >
      {props.loading && <CircularProgress size={24} />}
      {!props.loading &&
        !props.successText &&
        !props.errorText &&
        props.children}
      {props.successText}
      {props.errorText}
    </Button>
  </>
);

export default UploadButton;
