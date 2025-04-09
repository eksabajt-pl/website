import { Star } from "lucide-react";

export default function starsBox() {
	return (
		<>
			<div className="flex flex-row gap-2">
				<Star className="star" values="1" />
				<Star className="star" values="2" />
				<Star className="star" values="3" />
				<Star className="star" values="4" />
				<Star className="star" values="5" />
			</div>
		</>
	);
}
