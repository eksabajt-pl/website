import { ReviewForm } from "@/components/forms/ReviewForm";
import CurrentUserReviews from "../../../components/reviews/CurrentUserReviews";
import BentoCard from "@/components/cards/BentoCard";
import IsAdmin from "@/components/auth/IsAdmin";
import { Suspense } from "react";
import ModerateUserReviews from "@/components/reviews/ModerateUserReviews";

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
            <ModerateUserReviews />
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
