import { twMerge } from "tailwind-merge";
import TextGradient from "./TextGradient";

interface SectionHeadingProps {
  normal?: string;
  emphasis?: string;
  description?: string;
  className?: string;
}
export default function SectionHeading({
  normal,
  emphasis,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={twMerge("flex flex-col items-center gap-1 m-4 sm:gap-4 text-center", className)}>
      <div className="gap-2 font-bold flex flex-col">
        {normal && (
          <h3 className="text-2xl lg:text-3xl">{normal}</h3>
        )}
        {emphasis && (
          <TextGradient className="text-3xl lg:text-4xl">
            <h2>{emphasis}</h2>
          </TextGradient>
        )}
      </div>
      {description && (
        <div className="max-w-lg text-base md:text-md lg:text-lg gap-2 flex flex-col">
          <h4>{description}</h4>
        </div>
      )}
    </div>
  );
}
