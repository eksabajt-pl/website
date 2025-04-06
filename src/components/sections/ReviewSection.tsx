"use client";

import useReviews from "../hooks/useReviews";
import Marquee from "react-fast-marquee";
import { ReviewType } from "../types/ReviewType";
import { useTheme } from "next-themes";
import { useMediaQuery } from "react-responsive";
import { useMemo } from "react";
import SectionHeading from "../text/SectionHeading";
import ReviewCard from "../cards/ReviewCard";
import Section from "./Section";
import { FaSpinner } from "react-icons/fa";

type ReviewMarqueeProps = {
  reviews: ReviewType[];
  reversed?: boolean;
};

function ReviewMarquee({ reviews, reversed = false }: ReviewMarqueeProps) {
  const { resolvedTheme } = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 512 });
  return (
    <div className="flex flex-row">
      <Marquee
        autoFill={true}
        gradientWidth={isMobile ? 20 : 200}
        gradientColor={resolvedTheme == "dark" ? "black" : "white"}
        direction={reversed ? "right" : "left"}
        pauseOnHover={true}
        gradient={true}
        className=" w-[100%] h-46 flex  overflow-hidden"
      >
        {reviews?.map((value, index) => {
          return <ReviewCard key={index} {...value} />;
        })}
      </Marquee>
    </div>
  );
}

function ReviewSection() {
  const { reviews, loading } = useReviews();

  const half = useMemo(() => Math.ceil(reviews.length / 2), [reviews]);
  const firstHalf = useMemo(() => reviews.slice(0, half), [reviews, half]);
  const secondHalf = useMemo(() => reviews.slice(half), [reviews, half]);

  return (
    <Section id="reviews">
      <div className="max-w-[100vw] py-4 overflow-hidden flex-col flex gap-8">
        <SectionHeading
          normal="Co myślą o nas"
          emphasis="Nasi klienci"
          description="*wszystkie recenzje mają charakter poglądowy, nie należy ich traktować na poważnie - one nie istnieją"
        />
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <FaSpinner className="animate-spin text-4xl" />
          </div>
        ) : (
          <div className="flex flex-col overflow-hidden">
            <ReviewMarquee reviews={firstHalf} />
            <ReviewMarquee reversed={true} reviews={secondHalf} />
          </div>
        )}
      </div>
    </Section>
  );
}
export default ReviewSection;
