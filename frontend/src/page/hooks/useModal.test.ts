import { useModal } from "./useModal";
import { renderHook, act, RenderResult } from "@testing-library/react-hooks";

describe("useModal", () => {
  let result: RenderResult<ReturnType<typeof useModal>>;
  beforeEach(() => {
    ({ result } = renderHook(() => useModal()));
  });
  it("handle open and close", () => {
    expect(result.current.modalOpen).toBeFalsy();
    act(() => {
      result.current.handleModalOpen();
    });
    expect(result.current.modalOpen).toBeTruthy();
    act(() => {
      result.current.handleModalClose();
    });
    expect(result.current.modalOpen).toBeFalsy();
  });
});
