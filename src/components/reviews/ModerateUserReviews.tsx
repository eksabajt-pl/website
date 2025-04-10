import ReviewCard from "@/components/cards/ReviewCard";

import { getAllReviews } from "@/db/review/getAllReviews";
import { ModerateUserReviewDecorator } from "./ModerateUserReviewDecorator";

export default async function ModerateUserReviews() {
  const reviews = await getAllReviews();
  return reviews.map((value, key) => (
    <ModerateUserReviewDecorator reviewWithProfile={value} key={key}>
      <ReviewCard className="border-0" key={key} {...value} />
    </ModerateUserReviewDecorator>
  ));
}
