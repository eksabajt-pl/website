import CustomCard from "../pricing/cards/CustomCard";
import {MailCheckIcon} from "../ui/mail-check";
import Li from "../pricing/cards/LiCard";
import {twMerge} from "tailwind-merge";
import Badge from "../badge/Badge";
import {useCallback} from "react";
import {redirect} from "next/navigation";
import {useFormContext} from "react-hook-form";
import {useTranslation} from "react-i18next";
export interface PricingCardType {
	tier: "cheap" | "landing" | "startup" | "professional";
	title: string;
	price: string;
	icon: React.ElementType;
	unique: boolean;
	subtitle: string;
	features: string[];
}

export const PricingCard = ({
	tier,
	title,
	price,
	icon: Icon,
	unique,
	subtitle,
	features,
}: PricingCardType) => {
	const form = useFormContext();
	const {t} = useTranslation("pricing");

	const orderButtonHandler = useCallback(() => {
		form.setValue("tier", tier);
		redirect(`#contact`);
	}, [tier, form]);

	return (
		<CustomCard
			className={twMerge(
				`relative w-[100%] flex justify-between shadow-none border-neutral-700`,
				unique && "border-green-400"
			)}>
			<Icon className="absolute inset-0 text-award " size="100%" />
			{unique ? (
				<Badge className="-top-4 absolute left-[50%] -translate-x-[50%] ">
					{t("mostPopular")}
				</Badge>
			) : null}

			{/* Górna sekcja */}
			<section className="gap-2 z-2 flex flex-col justify-around text-xl sm:text-2xl ">
				<h3 className="text-center font-bold   ">{title}</h3>
				<h4 className="text-center text-green-400 font-bold tracking-widest text-lg sm:text-xl">
					{price}
				</h4>
				<p className="text-li text-center text-base sm:text-lg ">{subtitle}</p>
			</section>

			{/* Dolna sekcja */}
			<section className="z-2 px-4 py-4 flex flex-col text-sm sm:text-base ">
				<ul className="space-y-2">
					{features.map((feature, index) => (
						<Li key={index}>{feature}</Li>
					))}
				</ul>
			</section>
			<button
				onClick={orderButtonHandler}
				className="z-1 text-sm flex-row font-bold p-1 flex justify-center items-center text-white gap-2 bg-green-600 mx-4 cursor-pointer rounded-lg">
				<MailCheckIcon className="text-white" size={20} /> {t("orderToday")}
			</button>
		</CustomCard>
	);
};
