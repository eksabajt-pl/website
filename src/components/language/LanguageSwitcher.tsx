"use client";

import {useTranslation} from "react-i18next";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {Globe} from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import HeaderButton from "../buttons/HeaderButton";

export default function LanguageSwitcher() {
	const {i18n, t} = useTranslation("common");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang);
		// Zapisz jezyk w localStorage
		localStorage.setItem("i18nextLng", lang);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<HeaderButton aria-label={t("changeLanguage", "Change language")}>
					<Globe />
				</HeaderButton>
			</PopoverTrigger>
			<PopoverContent className="w-40 p-2">
				<div className="flex flex-col space-y-1">
					<Button
						variant={i18n.language === "en" ? "default" : "ghost"}
						size="sm"
						className={`justify-start font-normal cursor-pointer ${i18n.language !== "en" ? "hover:bg-neutral-100 dark:hover:bg-neutral-800" : ""} transition-colors`}
						onClick={() => changeLanguage("en")}>
						<span className="mr-2 font-semibold">EN</span>
						<span>English</span>
					</Button>
					<Button
						variant={i18n.language === "pl" ? "default" : "ghost"}
						size="sm"
						className={`justify-start font-normal cursor-pointer ${i18n.language !== "pl" ? "hover:bg-neutral-100 dark:hover:bg-neutral-800" : ""} transition-colors`}
						onClick={() => changeLanguage("pl")}>
						<span className="mr-2 font-semibold">PL</span>
						<span>Polski</span>
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
