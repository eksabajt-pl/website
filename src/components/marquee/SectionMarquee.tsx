"use client";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import { useMediaQuery } from "react-responsive";

import ReviewCard from "../cards/ReviewCard";
import { SelectReviewWithProfile } from "@/db/types";

type ReviewMarqueeProps = {
  reviews: SelectReviewWithProfile[];
  reversed?: boolean;
};

export function ReviewMarquee({
  reviews,
  reversed = false,
}: ReviewMarqueeProps) {
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
        className="w-[100%] h-46 flex  overflow-hidden"
      >
        {reviews?.map((value, index) => {
          return (
            <ReviewCard
              key={index}
              className="max-w-lg min-w-[0rem] w-[85vw] min-h-[100%] m-2"
              {...value}
            />
          );
        })}
      </Marquee>
    </div>
  );
}
