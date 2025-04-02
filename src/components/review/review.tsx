"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";
import useReviews from "@/components/hooks/useReviews";
import { ReviewType } from "../types/ReviewType";

function ReviewStars({ count = 5 }) {
	return (
		<div className=" flex justify-center items-center text-xl text-center max-md:w-[30%]">
			{Array(count)
				.fill(
					<FontAwesomeIcon
						className="text-sm sm:text-md md:text-lg text-green-500"
						icon={faStar}
					/>
				)
				.map((star, index) => (
					<span key={index}>{star}</span>
				))}
		</div>
	);
}

function Review({ name, content, stars }: ReviewType) {
	return (
		<div className="flex-1  h-full bg-stone-800/40 backdrop-blur-sm border-1 border-stone-400/40 m-2 rounded-2xl p-4 sm:p-6 md:p-8 flex-1 flex flex-col gap-2 ">
			<div className="flex flex-row justify-between">
				<div className="w-[100%] text-md sm:text-lg md:xl   text-stone-850 font-bold ">
					{name}
				</div>
				<ReviewStars count={stars} />
			</div>
			<div className="text-base sm:text-md md:text-lg text-wrap">{content}</div>
		</div>
	);
}

function ReviewSection() {
	const { reviews } = useReviews();

	return (
		<div className="flex justify-center ">
			<div className="max-w-[100rem] p-4">
				<div className="text-2xl md:text-3xl lg:text-4xl flex-wrap flex-row flex justify-center items-center">
					<p className="pb-2  mr-[10px]  ">Co myślą o nas</p>{" "}
					<Fade triggerOnce delay={500} cascade damping={0.05}>
						<TextGradient>nasi klienci</TextGradient>
					</Fade>
				</div>
				<div className=" p-4 items-start flex flex-col md:flex-row flex-wrap justify-around items-center">
					{reviews?.map((value, index) => {
						return <Review key={index} {...value} />;
					})}
				</div>
			</div>
		</div>
	);
}
export default ReviewSection;
