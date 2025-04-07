import SectionHeading from "../text/SectionHeading";
import FeedbackCard from "@/components/cards/FeedbackCard";

export default function Feedback() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center ">
      <SectionHeading normal="Podoba ci się usługa?" emphasis="Oceń nas!" />
        <FeedbackCard
        />
      </div>
    </>
  );
}
