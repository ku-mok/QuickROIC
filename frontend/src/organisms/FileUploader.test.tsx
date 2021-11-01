import FileUploader, { FileUploaderProps } from "./FileUploader";
import { render, screen } from "../test-utils";

it("disable button when file not accepted", async () => {
  const props: FileUploaderProps = {
    acceptedFiles: [],
    setAcceptedFiles: jest.fn(),
    handleUpload: jest.fn(),
    loading: false,
  };
  render(<FileUploader {...props} />);
  expect(await screen.findByText("アップロードして分析を実施")).toBeDisabled();
});

it("enable button when file  accepted", async () => {
  const props: FileUploaderProps = {
    acceptedFiles: [new File([], "TestFile.xlsx")],
    setAcceptedFiles: jest.fn(),
    handleUpload: jest.fn(),
    loading: false,
  };
  render(<FileUploader {...props} />);
  expect(
    await screen.findByText("アップロードして分析を実施")
  ).not.toBeDisabled();
});
