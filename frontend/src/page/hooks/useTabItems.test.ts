import { useTabItems } from "./useTabItems";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useTabItems", () => {
  it("enable all items when data loaded", () => {
    const { result } = renderHook(() => useTabItems(true));
    result.current.forEach((item) => expect(item.disabled).toBeFalsy());
  });
  it("enable all items default", () => {
    const { result } = renderHook(() => useTabItems());
    result.current.forEach((item) => expect(item.disabled).toBeFalsy());
  });
  it("disable 3 items when data not loaded", () => {
    const { result } = renderHook(() => useTabItems(false));
    const disabledItemLabels = ["データ確認", "ROIC-WACCグラフ", "ROICツリー"];
    result.current
      .filter((item) => disabledItemLabels.includes(item.label))
      .forEach((item) => expect(item.disabled).toBeTruthy());
  });
});
