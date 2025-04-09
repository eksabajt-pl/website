"use client";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { useCounter } from "../hooks/useCounter";

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

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
          "bg-background rounded-lg text-foreground p-2 text-nowrap text-center"
        }
      >
        {children}
      </div>
    </div>
  );
}
