"use server";
import Section from "./Section";
import { ReviewMarquee } from "../marquee/SectionMarquee";
import { fetchAllReviews } from "@/app/functions/getReviews";
import SectionHeading from "../text/SectionHeading";

export async function ReviewSection() {
  const reviews = await fetchAllReviews();

  const half = Math.ceil(reviews.length / 2);
  const firstHalf = reviews.slice(0, half);
  const secondHalf = reviews.slice(half);

  return (
    <Section id="reviews">
      <div className="max-w-[100vw] py-4 overflow-hidden flex-col flex gap-8">
        <SectionHeading
          normal="Co myślą o nas"
          emphasis="Nasi klienci"
          description="*wszystkie recenzje mają charakter poglądowy, nie należy ich traktować na poważnie - one nie istnieją"
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
