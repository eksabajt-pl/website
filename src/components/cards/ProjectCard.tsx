import { Suspense } from "react";
import { Card } from "../ui/card";
import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

type ProjectCardType = {
  title: string | undefined;
  description?: string;
  className: string;
  children: React.ReactNode;
};
export default function ProjectCard({
  title,
  description,
  className,
  children,
}: ProjectCardType) {
  return (
    <Card className={twMerge("p-4 gap-4 flex flex-col", className)}>
      <h3 className="font-bold text-2xl">{title}</h3>
      {description && <p>{description}</p>}
      <div className="gap-2 mt-2 flex flex-col">
        <Suspense
          fallback={<Loader2 className="animate-spin w-full justify-center" />}
        >
          {children}
        </Suspense>
      </div>
    </Card>
  );
}
