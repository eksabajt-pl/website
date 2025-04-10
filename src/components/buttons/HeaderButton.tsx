import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function HeaderButton(
  props: HeaderButtonProps & PropsWithChildren
) {
  const { children, className } = props;

  return (
    <button
      {...props}
      className={twMerge(
        "p-2 font-bold items-center max-w-md flex flex-row gap-2 cursor-pointer w-full rounded-lg",
        className
      )}
    >
      {children}
    </button>
  );
}
