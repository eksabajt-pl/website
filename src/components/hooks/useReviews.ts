"use client";

import { useEffect, useState } from "react";
import reviewsData from "./reviews.json";
import { ReviewType } from "../types/ReviewType";

export default function useReviews() {
	const [reviews, setReviews] = useState<ReviewType[]>(reviewsData);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setReviews(reviewsData);
	}, [loading]);

	return { loading, reviews };
}
