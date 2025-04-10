import { twMerge } from "tailwind-merge";
import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard({ className }: { className?: string }) {
  return (
    <Skeleton
      className={twMerge("h-[125px] w-[350px] rounded-xl", className)}
    />
  );
}
