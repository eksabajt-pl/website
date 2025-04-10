"use client";
import { ReactNode } from "react";
import BrandWave from "../pearls/BrandWave";
import SectionHeading from "../text/SectionHeading";
import { Card } from "../ui/card";
import Section from "./Section";
import {
	LucideCalendar,
	LucideFlag,
	LucideLayers,
	ThumbsUp,
} from "lucide-react";

interface AboutUsCardProps {
	title: string;
	content: string;
	icon: ReactNode;
}

function AboutUsCard({ title, content, icon }: AboutUsCardProps) {
	return (
		<Card className="min-w-2xs px-4 flex-1 flex flex-col">
			<div className="flex flex-row gap-2 items-center">
				{icon}
				<p className="text-xl font-bold">{title}</p>
			</div>
			<p className="flex-1">{content}</p>
		</Card>
	);
}

export default function AboutUsSection() {
	//const isMobile = useMediaQuery({maxWidth:1024});
	return (
		<>
			<BrandWave />
			<Section id="about-us" className="bg-green-600 -my-3">
				<div className="flex gap-2 flex-row max-w-7xl">
					<div className="flex-row flex-2 gap-2 flex flex-wrap">
						<Card className="w-full flex justify-center items-stretch flex-row p-0  ">
							<SectionHeading
								className="flex-1"
								normal="Poznaj nas, czyli"
								emphasis="eksabajt.pl"
								description="Pytania i odpowiedzi na temat naszej działalności programistycznej"
							/>
						</Card>
						<AboutUsCard
							icon={<LucideCalendar />}
							content={
								"Jesteśmy nową firmą na rynku, ale już teraz dynamicznie rozwijamy się w branży IT. Działamy od 2025 roku, dostarczając innowacyjne rozwiązania programistyczne. Naszym celem jest stworzenie nowoczesnych, funkcjonalnych produktów, które spełnią oczekiwania najbardziej wymagających klientów."
							}
							title="Na rynku od 2025"
						/>
						<AboutUsCard
							icon={<LucideLayers />}
							content={
								"Specjalizujemy się w tworzeniu aplikacji webowych, mobilnych, desktopowych oraz stron internetowych. Nasz zespół programistów projektuje i rozwija rozwiązania, które są dopasowane do indywidualnych potrzeb naszych klientów. Dzięki szerokiemu wachlarzowi usług, jesteśmy w stanie zaoferować kompleksowe rozwiązania w każdej dziedzinie technologii."
							}
							title="Czym się zajmujemy?"
						/>
						<AboutUsCard
							icon={<LucideFlag />}
							content={
								"Naszą misją jest dostarczanie produktów, które nie tylko spełniają potrzeby naszych klientów, ale także przewyższają ich oczekiwania. Stawiamy na innowacyjność, niezawodność i prostotę. Zależy nam na tym, aby nasze rozwiązania były intuicyjne, a ich wdrożenie i późniejsza obsługa były jak najprostsze."
							}
							title="Założenia naszej firmy"
						/>
						<AboutUsCard
							icon={<ThumbsUp />}
							content={
								"Wybierając nas, zyskujesz partnera, który angażuje się w każdy projekt. Nasze podejście opiera się na bliskiej współpracy z klientem oraz transparentności. Zawsze dążymy do tego, by nasze rozwiązania były nie tylko efektywne, ale również długofalowe. Inwestujemy w rozwój, dlatego każdy projekt realizujemy z najwyższą starannością."
							}
							title="Dlaczego my?"
						/>
					</div>

					{/*!isMobile && <div className="p-2 h-full flex flex-col flex-1 gap-2">
            <Image src={"/team.jpg"} width={1024} height={1024} className="flex-1 overflow-hidden rounded-lg" alt="Ambitny zespół młodych programistów - eksabajt.pl"/>
            <Image src={"/team.jpg"} width={1024} height={1024} className="flex-1 overflow-hidden rounded-lg" alt="Ambitny zespół młodych programistów - eksabajt.pl"/>
            <Image src={"/team.jpg"} width={1024} height={1024} className="flex-1 overflow-hidden rounded-lg" alt="Ambitny zespół młodych programistów - eksabajt.pl"/>

          </div>*/}
				</div>
			</Section>
			<BrandWave flipped={true} />
		</>
	);
}
