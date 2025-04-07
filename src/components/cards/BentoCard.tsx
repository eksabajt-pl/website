import { PropsWithChildren, Suspense } from "react";
import { Card } from "../ui/card";
import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface BentoCardProps extends PropsWithChildren {
  title: string;
  description?: string;
  className?: string;
}

export default function BentoCard({
  title,
  description,
  className,
  children,
}: BentoCardProps) {
  return (
    <Card
      className={twMerge("p-4 gap-4 flex flex-col overflow-scroll", className)}
    >
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
