"use client";

import { useEffect, useState } from "react";
import reviewsData from "./reviews.json";
import { ReviewType } from "../types/ReviewType";
import { fetchAllReviews } from "@/app/functions/getReviews";

export default function useReviews() {
  const [reviews, setReviews] = useState<ReviewType[]>([reviewsData]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchAllReviews()
      .then((data) => setReviews(data))
      .then(() => setLoading(false));
  }, [loading]);

  return { loading, reviews };
}
