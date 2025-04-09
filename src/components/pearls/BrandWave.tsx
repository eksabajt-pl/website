import Wave from "react-wavify";
import { twMerge } from "tailwind-merge";

type BrandWaveProps = {
	flipped?: boolean;
};

export default function BrandWave({ flipped = false }: BrandWaveProps) {
	return (
		<div className="relative m-0 -z-10 -mb-1">
			<Wave
				fill="url(#gradient)"
				className={twMerge("wave", flipped && "rotate-x-180")}
			>
				<defs>
					<linearGradient id="gradient" gradientTransform="rotate(90)">
						<stop offset="10%" stopColor="oklch(0.627 0.194 149.214)" />
						<stop offset="90%" stopColor="oklch(0.627 0.194 149.214)" />
					</linearGradient>
				</defs>
			</Wave>
		</div>
	);
}
