import { Suspense } from "react";
import UserCard from "../../components/cards/UserCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  return (
    <div>
      <Suspense
        fallback={<Skeleton className="h-[125px] w-[350px] rounded-xl" />}
      >
        <UserCard />
      </Suspense>
    </div>
  );
}
