import { Suspense } from "react";
import CurrentUserCard from "../../components/cards/CurrentUserCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  return (
    <div>
      <Suspense
        fallback={<Skeleton className="h-[125px] w-[350px] rounded-xl" />}
      >
        <CurrentUserCard />
      </Suspense>
    </div>
  );
}
