import { Suspense } from "react";
import CurrentUserCard from "../../components/cards/CurrentUserCard";
import SkeletonCard from "@/components/cards/SkeletonCard";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<SkeletonCard />}>
        <CurrentUserCard />
      </Suspense>
    </div>
  );
}
