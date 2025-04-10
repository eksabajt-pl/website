import { useEffect, useState } from "react";

export const useCounter = (ms = 10, max = 360, increment = 1) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setValue((v) => (v + increment) % max),
      ms
    );
    return () => clearInterval(interval);
  }, [increment, max, setValue, ms]);
  return { value };
};
