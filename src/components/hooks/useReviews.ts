import { useEffect, useState } from "react";
import { ReviewType } from "../types/ReviewType";
import { fetchAllReviews } from "@/app/functions/getReviews";

export default function useReviews() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchAllReviews()
      .then((data) => setReviews(data as ReviewType[]))
      .finally(() => setLoading(false));
  }, [setLoading]);

  return { loading, reviews };
}
