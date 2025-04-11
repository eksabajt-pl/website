import { useEffect, useState } from "react";
import { getAllReviews } from "@/db/review/getAllReviews";
import { SelectReviewWithProfile } from "@/db/types";

export default function useReviews() {
  const [reviews, setReviews] = useState<SelectReviewWithProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getAllReviews()
      .then((data) => setReviews(data as SelectReviewWithProfile[]))
      .finally(() => setLoading(false));
  }, [setLoading]);

  return { loading, reviews };
}
