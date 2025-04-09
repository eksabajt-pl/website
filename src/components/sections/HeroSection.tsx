import CtaButton from "../buttons/CtaButton";
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";

export default function HeroSection() {
	return (
		<section className="font-sans relative gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
			<div className="-z-20 w-auto h-[40rem] top-[50%] -translate-y-[50%] aspect-square absolute rounded-full  dark:bg-green-500/10 blur-[10rem]"></div>

			<div className="flex  flex-row gap-4 text-5xl justify-center flex-wrap">
				<Fade triggerOnce cascade damping={0.05}>
					Czym jest
				</Fade>
				<TextGradient>
					{" "}
					<Fade
						triggerOnce
						delay={500}
						className="font-bold"
						cascade
						damping={0.05}
					>
						eksabajt?
					</Fade>
				</TextGradient>
			</div>
			<ul className="gap-2 text-md max-w-lg flex-col flex list-disc pl-10 text-muted-foreground">
				<li>to kolejna jednostka informatyczna po petabajcie</li>
				<li>to jednostka wynosząca 10^18 bajta</li>
				<li>to ilość danych globalnie wysyłanych przez internet co godzinę</li>
				<li className="text-foreground">
					co najważniejsze, to{" "}
					<span className="font-bold">firma programistyczna</span>, z Opola,
					która{" "}
					<span className="font-bold">
						wyceni, zaprojektuje i zaprogramuje twoją stronę
					</span>
				</li>
			</ul>
			<Fade delay={5500}>
				<CtaButton />
			</Fade>
		</section>
	);
}
