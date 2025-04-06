import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export default function TextGradient({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={twMerge(
        "pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500",
        className
      )}
    >
      {children}
    </div>
  );
}
