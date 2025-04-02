import { MailPlus } from "lucide-react";
import { twMerge } from "tailwind-merge";

type CtaButtonProps = {
  className?: string;
  full?: boolean;
  text?: string;
};

export default function CtaButton({
  className,
  text,
  full = true,
}: CtaButtonProps) {
  return (
    <a href="#contact" aria-label="Contact us link">
      <button
        aria-label="Contact us button"
        className={twMerge(
          "p-3 font-bold items-center max-w-md text-white flex flex-row gap-2 bg-green-600 hover:bg-green-500 transition-color cursor-pointer w-full rounded-lg",
          className
        )}
      >
        <MailPlus />
        {full && <p>{text || "Skontaktuj się z nami"}</p>}
      </button>
    </a>
  );
}
