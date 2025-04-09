"use client";
import Section from "./Section";
import { ReviewMarquee } from "../marquee/SectionMarquee";
import { getAllReviews } from "@/db/review/getAllReviews";
import SectionHeading from "../text/SectionHeading";
import { useEffect, useMemo, useState } from "react";
import { SelectReviewWithProfile } from "@/db/schema";

const useReviews = () => {
	const [reviews, setReviews] = useState<SelectReviewWithProfile[]>([]);
	useEffect(() => {
		getAllReviews().then((data) => setReviews(data));
	}, [setReviews]);

	const half = useMemo(() => Math.ceil(reviews.length / 2), [reviews]);
	const firstHalf = useMemo(() => reviews.slice(0, half), [reviews, half]);
	const secondHalf = useMemo(() => reviews.slice(half), [reviews, half]);

	return { reviews, firstHalf, secondHalf };
};

export function ReviewSection() {
	const { firstHalf, secondHalf } = useReviews();

	return (
		<Section id="reviews">
			<div className="max-w-[100vw] py-4 overflow-hidden flex-col flex gap-8">
				<SectionHeading
					normal="Co myślą o nas"
					emphasis="Nasi klienci"
					description="Wszystkie recenzje zostały napisane przez użytkowników, napisz swoją poprzez sekcje w panelu klienta, lub poprzez link z emaila. Uwaga, recenzje niezgodne z regulaminem, nie będą pokazywane na stronie głównej, zapoznaj się z regulaminem na eksabajt.pl/regulamin"
				/>

				<div className="flex flex-col overflow-hidden">
					<ReviewMarquee reviews={firstHalf} />
					<ReviewMarquee reversed={true} reviews={secondHalf} />
				</div>
			</div>
		</Section>
	);
}
export default ReviewSection;
