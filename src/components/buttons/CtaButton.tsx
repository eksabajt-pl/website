import {MailPlus} from "lucide-react";
import {twMerge} from "tailwind-merge";
import {useTranslation} from "react-i18next";

type CtaButtonProps = {
	className?: string;
	full?: boolean;
	text?: string;
};

export default function CtaButton({
	className,
	text,
	full = true,
}: CtaButtonProps) {
	const {t} = useTranslation("common");
	return (
		<a href="#contact" aria-label="Contact us link">
			<button
				aria-label="Contact us button"
				className={twMerge(
					"p-3 font-bold items-center max-w-md text-white flex flex-row gap-2 bg-green-800 hover:bg-green-700 transition-color cursor-pointer w-full rounded-lg",
					className
				)}>
				<MailPlus />
				{full && <p>{text || t("buttons.contactUs")}</p>}
			</button>
		</a>
	);
}
