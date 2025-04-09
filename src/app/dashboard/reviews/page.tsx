import { ReviewForm } from "@/components/forms/ReviewForm";
import CurrentUserReviews from "./CurrentUserReviews";
import BentoCard from "@/components/cards/BentoCard";
import UserReviews from "./UserReviews";
import IsAdmin from "./IsAdmin";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="grid auto-rows-[22rem] auto-cols-[15rem] max-w-4xl grid-cols-1 sm:grid-cols-2 gap-4 ">
      <BentoCard
        description="Share your experiences with others"
        title="Write a review"
      >
        <ReviewForm />
      </BentoCard>
      <BentoCard className="sm:row-span-2 " title="Your reviews">
        <CurrentUserReviews />
      </BentoCard>
      <Suspense>
        <IsAdmin>
          <BentoCard className="sm:row-span-2 " title="All reviews">
            <UserReviews />
          </BentoCard>
        </IsAdmin>
      </Suspense>
      <BentoCard
        title="We hear you"
        description="At eksabajt.pl every user's feedback matters"
      />
    </div>
  );
}
