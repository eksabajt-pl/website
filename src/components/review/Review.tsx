import { ReviewType } from "../types/ReviewType";
import { Star } from "lucide-react";
import { Card } from "../ui/card";
import { useMediaQuery } from "react-responsive";

function ReviewStars({ count = 5, max = 5 }) {

	const isMobile = useMediaQuery({ maxWidth: 512 });
	return (
		<div className="top-0 right-0 absolute flex justify-center items-start text-xl text-center ">
			{Array(max)
				.fill(0)
				.map((value, index) => <Star size={isMobile ? 18 : 24} fill={index < count ? "#00c951" : "transparent"} className="text-sm sm:text-md md:text-lg text-green-500" key={index}/> )}
		</div>
	);
}
		{/*<div className="flex-1 h-full min-w-[0rem] w-[85vw] max-w-lg   bg-neutral-200/20  dark:bg-neutral-800/40 backdrop-blur-sm border-1 dark:border-neutral-400/40 border-neutral-400/30 m-2 rounded-2xl p-4 sm:p-6 md:p-8  flex flex-col gap-1  ">
		</div>*/}
function Review({ name, content, stars, company }: ReviewType) {
	return (

		<Card className="min-w-[0rem] w-[85vw] max-w-lg min-h-[100%] flex flex-col m-2 p-4 gap-2 overflow-hidden">
			<div className="relative flex flex-row justify-between">
				<div className="font-bold w-[100%] max-w-md text-md gap-1 flex-wrap flex sm:text-lg md:xl    ">
					<span>{name}</span>
					<span>z {company}</span>
				</div>
				<ReviewStars count={stars} />
			</div>
			<div className="text-base sm:text-md md:text-lg text-wrap flex-1 items-center flex ">{content}</div>
		</Card>
	);
}
export default Review;
