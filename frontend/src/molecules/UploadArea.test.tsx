import { act } from "react-dom/test-utils";
import { render, screen, Screen, fireEvent } from "../test-utils";
import UploadArea, { UploadAreaProps } from "./UploadArea";

it("display acceptedFile", async () => {
  const props: UploadAreaProps = {
    acceptedFiles: [new File([], "TestFile.xlsx")],
    setAcceptedFiles: jest.fn(),
  };
  render(<UploadArea {...props} />);
  expect(await screen.findByText("TestFile.xlsx")).toBeInTheDocument();
});

it("call setAccepted when dropped", async () => {
  const mockSetFiles = jest.fn();
  const props: UploadAreaProps = {
    acceptedFiles: [],
    setAcceptedFiles: mockSetFiles,
  };
  render(<UploadArea {...props} />);
  await act(async () => {
    fireDropEvent(screen);
  });
  expect(mockSetFiles.mock.calls.length).toBe(1);
});

// ファイルのドロップイベントを発火させる
async function fireDropEvent(
  screen: Screen<typeof import("@testing-library/dom/types/queries")>
) {
  const dropzone = screen.getByTestId("dropzone");
  Object.defineProperty(dropzone, "files", {
    value: [new File([], "TestFile.xlsx")],
  });
  fireEvent.drop(dropzone);
}
