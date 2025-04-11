"use client";
import {ReactNode} from "react";
import BrandWave from "../pearls/BrandWave";
import SectionHeading from "../text/SectionHeading";
import {Card} from "../ui/card";
import Section from "./Section";
import {useTranslation} from "react-i18next";
import {LucideCalendar, LucideFlag, LucideLayers, ThumbsUp} from "lucide-react";

interface AboutUsCardProps {
	title: string;
	content: string;
	icon: ReactNode;
}

function AboutUsCard({title, content, icon}: AboutUsCardProps) {
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
	const {t} = useTranslation("about");

	return (
		<>
			<BrandWave />
			<Section id="about-us" className="bg-green-600 -my-3">
				<div className="flex gap-2 flex-row max-w-7xl">
					<div className="flex-row flex-2 gap-2 flex flex-wrap">
						<Card className="w-full flex justify-center items-stretch flex-row p-0  ">
							<SectionHeading
								className="flex-1"
								normal={t("section.title")}
								emphasis={t("section.emphasis")}
								description={t("section.description")}
							/>
						</Card>
						<AboutUsCard
							icon={<LucideCalendar />}
							content={t("cards.established.content")}
							title={t("cards.established.title")}
						/>
						<AboutUsCard
							icon={<LucideLayers />}
							content={t("cards.services.content")}
							title={t("cards.services.title")}
						/>
						<AboutUsCard
							icon={<LucideFlag />}
							content={t("cards.mission.content")}
							title={t("cards.mission.title")}
						/>
						<AboutUsCard
							icon={<ThumbsUp />}
							content={t("cards.whyUs.content")}
							title={t("cards.whyUs.title")}
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
