import { useIntervalFunc } from "./useIntervalFunc";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useModal", () => {
  it("handle timer start and stop", () => {
    const mockFn = jest.fn();
    jest.useFakeTimers();
    const interval = 1000;
    const { result } = renderHook(() => useIntervalFunc(mockFn, interval));
    // startIntervalを呼ぶまでは実行されない
    expect(mockFn).not.toBeCalled();
    // startIntervalを呼んだ後に時間経過で呼ばれる
    act(() => result.current.startInterval());
    jest.advanceTimersByTime(interval);
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(interval);
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(2);

    // stopIntervalを呼ぶと呼ばれなくなる
    act(() => result.current.stopInterval());
    jest.advanceTimersByTime(interval);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
  it("don't setInterval redundantly", () => {
    const mockFn = jest.fn();
    jest.useFakeTimers();
    const interval = 1000;
    const { result } = renderHook(() => useIntervalFunc(mockFn, interval));
    // 2回startしても1回しか呼ばれない
    act(() => {
      result.current.startInterval();
    });
    act(() => {
      result.current.startInterval();
    });
    jest.advanceTimersByTime(interval);
    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it("do nothing with stopInterval if interval not set", () => {
    const mockFn = jest.fn();
    jest.useFakeTimers();
    const interval = 1000;
    const { result } = renderHook(() => useIntervalFunc(mockFn, interval));
    act(() => {
      result.current.stopInterval();
    });
    expect(mockFn).not.toBeCalled();
  });
  it("toggle interval start/stop", () => {
    const mockFn = jest.fn();
    jest.useFakeTimers();
    const interval = 1000;
    const { result } = renderHook(() => useIntervalFunc(mockFn, interval));
    expect(mockFn).not.toBeCalled();
    act(() => {
      result.current.toggleInterval();
    });
    jest.advanceTimersByTime(interval);
    expect(mockFn).toHaveBeenCalledTimes(1);
    act(() => {
      result.current.toggleInterval();
    });
    jest.advanceTimersByTime(interval);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
