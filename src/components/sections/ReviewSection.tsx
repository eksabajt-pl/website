"use client";
import Section from "./Section";
import { ReviewMarquee } from "../marquee/SectionMarquee";
import SectionHeading from "../text/SectionHeading";
import { useEffect, useMemo, useState } from "react";
import { SelectReviewWithProfile } from "@/db/schema";
import { getVerifiedReviews } from "@/db/review/getVerifiedReviews";
import { HourglassIcon } from "lucide-react";

const useReviews = () => {
  const [reviews, setReviews] = useState<SelectReviewWithProfile[]>([]);
  useEffect(() => {
    getVerifiedReviews().then((data) => setReviews(data));
  }, [setReviews]);

  const half = useMemo(() => Math.ceil(reviews.length / 2), [reviews]);
  const firstHalf = useMemo(() => reviews.slice(0, half), [reviews, half]);
  const secondHalf = useMemo(() => reviews.slice(half), [reviews, half]);

  return { reviews, firstHalf, secondHalf };
};

export function ReviewSection() {
  const { reviews, firstHalf, secondHalf } = useReviews();

  return (
    <Section id="reviews">
      <div className="max-w-[100vw] py-4 overflow-hidden flex-col flex gap-8">
        <SectionHeading
          normal="Co myślą o nas"
          emphasis="Nasi klienci"
          description="Wszystkie recenzje zostały napisane przez użytkowników, napisz swoją poprzez sekcje w panelu klienta, lub poprzez link z emaila. Uwaga, recenzje niezgodne z regulaminem, nie będą pokazywane na stronie głównej, zapoznaj się z regulaminem na eksabajt.pl/regulamin"
        />

        <div className="flex flex-col overflow-hidden w-screen relative">
          {reviews.length === 0 && (
            <p className="flex flex-row gap-4 text-muted-foreground absolute top-[50%] left-[50%] -translate-x-[50%]">
              <HourglassIcon /> Czekamy na twoją opinię...
            </p>
          )}
          <ReviewMarquee reviews={firstHalf} />
          <ReviewMarquee reversed={true} reviews={secondHalf} />
        </div>
      </div>
    </Section>
  );
}
export default ReviewSection;
