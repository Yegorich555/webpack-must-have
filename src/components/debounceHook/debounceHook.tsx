import { useEffect, useState } from "react";

const useDebounce: (
  value: string,
  timeout: number,
  callback: { (): Promise<void>; (...args: unknown[]): void }
) => void = (value: string, timeout: number, callback: { (): Promise<void>; (...args: unknown[]): void }) => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();

    if (value && callback) {
      const newTimer: ReturnType<typeof setTimeout> = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
  }, [value]);
};
export default useDebounce;
