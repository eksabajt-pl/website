import { MailPlus } from "lucide-react";
import { twMerge } from "tailwind-merge";

type ContactIconProps = {
  className?: string;
};

export default function ContactIconButton({ className }: ContactIconProps) {
  return (
    <a href="#contact" aria-label="Contact us link">
      <button
        aria-label="Contact us button"
        className={twMerge(
          "p-2 font-bold items-center max-w-md flex flex-row gap-2 cursor-pointer w-full rounded-lg",
          className
        )}
      >
        <MailPlus />
      </button>
    </a>
  );
}
