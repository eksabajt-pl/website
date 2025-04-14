"use client";
import { useEffect, useState } from "react";
import { CarouselItem } from "../ui/carousel";
import { SelectPortfolioImage } from "@/db/types";
import { createClient } from "@/utils/supabase/client";
import { twMerge } from "tailwind-merge";

interface CarouselPortfolioImageProps {
  className?: string;
}

export const CarouselPortfolioImage = ({
  label,
  path,
  className,
  //= "https://placehold.co/600x400/777/31343C",
}: SelectPortfolioImage & CarouselPortfolioImageProps) => {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    const payload = async () => {
      if (!path) {
        setSrc("https://placehold.co/600x400/777/31343C?text=placeholder");
        return;
      }
      const supabase = await createClient();
      const { data } = await supabase.storage
        .from("portfolio")
        .getPublicUrl(path);

      setSrc(data.publicUrl);
    };

    payload();
  }, [path]);

  return (
    <CarouselItem className={twMerge("relative overflow-clip", className)}>
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="w-full aspect-[4/3] object-cover"
          src={src}
          alt={label!}
        />
      )}
      {label && (
        <p className="absolute p-4 text-white  bottom-0 bg-gradient-to-b  from-transparent to-black w-full">
          {label}
        </p>
      )}
    </CarouselItem>
  );
};
