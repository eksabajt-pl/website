"use server";
import ReviewCard from "@/components/cards/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";
import { getAllReviews } from "@/db/review/getAllReviews";
import { BanIcon, CheckIcon, TrashIcon } from "lucide-react";

function ReviewCardDecorator({ children }) {
  return (
    <Card className="p-0 ">
      {children}
      <div className="p-4 -mt-10 flex flex-row gap-2">
        <Button className="flex-1">
          <TrashIcon />
          Delete
        </Button>
        <Button className="flex-1">
          <CheckIcon /> Accept
        </Button>

        <Button className="flex-1">
          <BanIcon />
          Ban User
        </Button>
      </div>
    </Card>
  );
}

export default async function UserReviews() {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return;
  }
  const reviews = await getAllReviews();
  console.log(reviews);
  return reviews.map((value, key) => (
    <ReviewCardDecorator key={key}>
      <ReviewCard className="border-0" key={key} {...value} />
    </ReviewCardDecorator>
  ));
}
