"use client";
import { Star } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function ReviewStars({ count = 5, max = 5 }) {
  const isMobile = useMediaQuery({ maxWidth: 512 });
  return (
    <div className="top-0 right-0 flex justify-center items-start text-xl text-center ">
      {Array(max)
        .fill(0)
        .map((value, index) => (
          <Star
            size={isMobile ? 18 : 24}
            fill={index < count ? "#00c951" : "transparent"}
            className="text-sm sm:text-md md:text-lg text-green-500"
            key={index}
          />
        ))}
    </div>
  );
}
