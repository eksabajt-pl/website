"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

const useCounter = (ms = 10, max = 360, increment = 1) => {
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

export default function Badge({ children, className }: BadgeProps) {
  const { value } = useCounter(10);
  return (
    <div
      style={{ "--percent": `${value}deg` } as React.CSSProperties}
      className={twMerge(
        className,
        " animate-spin-cone  p-[1px]   rounded-lg "
      )}
    >
      <div
        className={
          "bg-neutral-900 rounded-lg text-white p-2 text-nowrap text-center"
        }
      >
        {children}
      </div>
    </div>
  );
}
