"use client";
import { useState } from "react";
import { Star } from "lucide-react";

type StarsBoxProps = {
	rating?: number;
	onChange?: (value: number) => void;
	max?: number;
	className?: string;
};

export default function StarsBox({
	rating,
	onChange,
	max = 5,
	className = "",
}: StarsBoxProps) {
	const [internalRating, setInternalRating] = useState(0);
	const [hoverRating, setHoverRating] = useState<number | null>(null);

	const currentRating = rating ?? internalRating;

	const handleClick = (value: number) => {
		if (onChange) onChange(value);
		if (rating === undefined) setInternalRating(value);
	};

	return (
		<div className={`flex flex-row gap-1 ${className}`}>
			{Array.from({ length: max }, (_, i) => {
				const isClicked = i < currentRating;
				const isHovered = hoverRating !== null && i < hoverRating;

				return (
					<Star
						key={i}
						onClick={() => handleClick(i + 1)}
						onMouseEnter={() => setHoverRating(i + 1)}
						onMouseLeave={() => setHoverRating(null)}
						className="cursor-pointer transition-all duration-150 w-6 h-6"
						style={{
							color: isHovered ? "gold" : isClicked ? "gold" : "lightgray",
							fill: isClicked ? "gold" : "none",
						}}
					/>
				);
			})}
		</div>
	);
}