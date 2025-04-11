"use client";
import {Award} from "lucide-react";
import {Building} from "lucide-react";
import {Atom} from "lucide-react";
import {LayoutDashboard} from "lucide-react";
import {PricingCard, PricingCardType} from "../cards/PricingCard";
import SectionHeading from "../text/SectionHeading";
import {useTranslation} from "react-i18next";

export default function PricingSection() {
	const {t} = useTranslation("pricing");

	const cardValues: PricingCardType[] = [
		{
			tier: "cheap",
			title: t("tiers.cheap.title"),
			price: t("tiers.cheap.price"),
			icon: LayoutDashboard,
			unique: false,
			subtitle: t("tiers.cheap.subtitle"),
			features: [
				t("tiers.cheap.features.0"),
				t("tiers.cheap.features.1"),
				t("tiers.cheap.features.2"),
				t("tiers.cheap.features.3"),
				t("tiers.cheap.features.4"),
				t("tiers.cheap.features.5"),
			],
		},
		{
			tier: "landing",
			title: t("tiers.landing.title"),
			price: t("tiers.landing.price"),
			icon: Award,
			unique: true,
			subtitle: t("tiers.landing.subtitle"),
			features: [
				t("tiers.landing.features.0"),
				t("tiers.landing.features.1"),
				t("tiers.landing.features.2"),
				t("tiers.landing.features.3"),
				t("tiers.landing.features.4"),
				t("tiers.landing.features.5"),
			],
		},
		{
			tier: "startup",
			title: t("tiers.startup.title"),
			price: t("tiers.startup.price"),
			icon: Building,
			unique: false,
			subtitle: t("tiers.startup.subtitle"),
			features: [
				t("tiers.startup.features.0"),
				t("tiers.startup.features.1"),
				t("tiers.startup.features.2"),
				t("tiers.startup.features.3"),
				t("tiers.startup.features.4"),
				t("tiers.startup.features.5"),
			],
		},
		{
			tier: "professional",
			title: t("tiers.professional.title"),
			price: t("tiers.professional.price"),
			icon: Atom,
			unique: false,
			subtitle: t("tiers.professional.subtitle"),
			features: [
				t("tiers.professional.features.0"),
				t("tiers.professional.features.1"),
				t("tiers.professional.features.2"),
				t("tiers.professional.features.3"),
				t("tiers.professional.features.4"),
				t("tiers.professional.features.5"),
			],
		},
	];

	return (
		<div className="max-w min-h-[100vh] flex flex-col items-center justify-start">
			{/* Nagłówek */}
			<SectionHeading
				normal={t("section.title")}
				emphasis={t("section.emphasis")}
				description={t("section.description")}
			/>

			{/* oferta */}
			<div className="p-8 xl:p-2 2xl:p-5  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 max-w min-h-[60vh] flex-wrap justify-center">
				{cardValues.map((option, index) => (
					<PricingCard key={index} {...option} />
				))}
			</div>

			{/* opis poza kartą */}
			<div className="max-w-lg">
				<p className="text-base m-5 text-muted-foreground flex justify-center text-center">
					{t("disclaimer")}
				</p>
			</div>
		</div>
	);
}
