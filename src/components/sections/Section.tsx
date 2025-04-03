import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps extends PropsWithChildren {
  id: string;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={twMerge(
        "font-sans gap-8 p-8 flex flex-col gap-4  items-center justify-center",
        className
      )}
    >
      {children}
    </section>
  );
}
