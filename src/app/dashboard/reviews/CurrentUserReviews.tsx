"use server";
import ReviewCard from "@/components/cards/ReviewCard";
import { getCurrentUser } from "@/db/auth/getCurrentUser";
import { getUserReviews } from "@/db/review/getUserReviews";

export default async function CurrentUserReviews() {
  const user = await getCurrentUser();
  const reviews = await getUserReviews(user.id);
  console.log(reviews);
  return reviews.map((value, key) => <ReviewCard key={key} {...value} />);
}
