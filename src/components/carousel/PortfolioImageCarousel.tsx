import { SelectPortfolioImage } from "@/db/types";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CarouselPortfolioImage } from "./PortfolioCarouselImages";
import { twMerge } from "tailwind-merge";

export function PortfolioImageCarousel({
  portfolioImages,
  className,
  imagesClassName,
}: {
  className?: string;
  portfolioImages: SelectPortfolioImage[];
  imagesClassName?: string;
}) {
  return (
    <Carousel className={twMerge("relative", className)}>
      <CarouselContent>
        {portfolioImages.map((props, index) => (
          <CarouselPortfolioImage
            className={imagesClassName}
            key={index}
            {...props}
          />
        ))}
      </CarouselContent>
      <CarouselNext className="absolute z-2 right-2" />
      <CarouselPrevious className="absolute z-2 left-2" />
    </Carousel>
  );
}
