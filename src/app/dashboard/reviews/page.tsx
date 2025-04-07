import { ReviewForm } from "@/components/forms/ReviewForm";
import CurrentUserReviews from "./CurrentUserReviews";
import { Suspense } from "react";
import SkeletonCard from "@/components/cards/SkeletonCard";

export default function Page() {
  return (
    <div className="flex flex-col  gap-4">
      <ReviewForm />
      <h3 className="font-bold text-2xl">Your reviews</h3>

      <Suspense fallback={<SkeletonCard className="w-lg" />}>
        <CurrentUserReviews />
      </Suspense>
    </div>
  );
}
