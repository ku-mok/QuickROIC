import NewFile from "./NewFile";
import { render, screen, fireEvent } from "../test-utils";
import { MockedProvider } from "@apollo/react-testing";
import { Screen } from "@testing-library/react";

it("activate button when file accepted", async () => {
  render(
    <MockedProvider addTypename={false}>
      <NewFile />
    </MockedProvider>
  );
  expect(screen.getByText("アップロードして分析を実施")).toBeDisabled();
  fireDropEvent(screen);
  expect(
    await screen.findByText("アップロードして分析を実施")
  ).not.toBeDisabled();
  expect(await screen.findByText("TestFile.xlsx")).toBeInTheDocument();
});
/*
 TODO: FileUploadを行うMutationのテストがうまくいかないので要調査
 https://github.com/jaydenseric/apollo-upload-examples/issues/18では未解決のまま
*/

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
