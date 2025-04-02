import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ReviewType } from "../types/ReviewType";

function ReviewStars({ count = 5 }) {
	return (
		<div className=" flex justify-center items-start text-xl text-center ">
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

function Review({ name, content, stars, company }: ReviewType) {
	return (
		<div className="flex-1 h-full min-w-[0rem] w-[85vw] max-w-lg   bg-neutral-200/20  dark:bg-neutral-800/40 backdrop-blur-sm border-1 dark:border-neutral-400/40 border-neutral-400/30 m-2 rounded-2xl p-4 sm:p-6 md:p-8  flex flex-col gap-1  ">
			<div className="flex flex-row justify-between">
				<div className="font-bold w-[100%] text-md gap-1 flex-col sm:flex-row flex sm:text-lg md:xl    ">
					<span>{name}</span>
					<span> z {company}</span>
				</div>
				<ReviewStars count={stars} />
			</div>
			<div className="text-base sm:text-md md:text-lg text-wrap">{content}</div>
		</div>
	);
}
export default Review;
