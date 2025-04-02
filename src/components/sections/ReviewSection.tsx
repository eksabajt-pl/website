"use client";

import useReviews from "../hooks/useReviews";
import TextGradient from "../text/TextGradient";
import Review from "../review/Review";
import Fade from "../pearls/Fade";
import Marquee from "react-fast-marquee";
import { ReviewType } from "../types/ReviewType";
import { useTheme } from "next-themes";
import { useMediaQuery } from "react-responsive";
import { useMemo } from "react";

type ReviewMarqueeProps = {
	reviews: ReviewType[];
	reversed?: boolean;
};

function ReviewMarquee({ reviews, reversed = false }: ReviewMarqueeProps) {
	const { theme } = useTheme();
	const isMobile = useMediaQuery({ maxWidth: 512 });
	return (
		<div className="flex flex-row">
			<Marquee
				gradientWidth={isMobile ? 20 : 200}
				gradientColor={theme == "dark" ? "black" : "white"}
				direction={reversed ? "right" : "left"}
				pauseOnHover={true}
				gradient={true}
				className=" w-[100%]"
			>
				{reviews?.map((value, index) => {
					return <Review key={index} {...value} />;
				})}
			</Marquee>
		</div>
	);
}

function ReviewSection() {
	const { reviews } = useReviews();

	const half = useMemo(() => Math.ceil(reviews.length / 2), [reviews]);
	const firstHalf = useMemo(() => reviews.slice(0, half), [reviews, half]);
	const secondHalf = useMemo(() => reviews.slice(half), [reviews, half]);

	return (
		<div className="flex justify-center ">
			<div className="max-w-[100vw] overflow-scroll py-4">
				<div className="text-2xl pb-4 text-center md:text-3xl lg:text-4xl  flex-col md:flex-row flex justify-center items-center">
					<p className="pb-2  mr-[10px]  ">Co myślą o nas</p>{" "}
					<Fade triggerOnce delay={500} cascade damping={0.05}>
						<TextGradient>nasi klienci</TextGradient>
					</Fade>
				</div>
				<div className="flex flex-col overflow-hidden">
					<ReviewMarquee reviews={firstHalf} />
					<ReviewMarquee reversed={true} reviews={secondHalf} />
				</div>
			</div>
		</div>
	);
}
export default ReviewSection;
