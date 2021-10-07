import { useCallback, useState } from "react";

export const useIntervalFunc = (func: () => void, interval: number) => {
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const startInterval = useCallback(() => {
    if (isActive) {
      return;
    }
    const id = window.setInterval(func, interval);
    setIsActive(true);
    setIntervalId(id);
  }, [func, interval, isActive]);
  const stopInterval = useCallback(() => {
    window.clearInterval(intervalId);
    setIsActive(false);
    setIntervalId(undefined);
  }, [intervalId]);
  const toggleInterval = useCallback(() => {
    if (isActive) {
      stopInterval();
    } else {
      startInterval();
    }
  }, [isActive, startInterval, stopInterval]);
  return { isActive, startInterval, stopInterval, toggleInterval };
};
