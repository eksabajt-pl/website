"use client";

import {useTranslation} from "react-i18next";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

export default function LanguageSwitcher() {
	const {i18n, t} = useTranslation("common");
	const [mounted, setMounted] = useState(false);

	// Upewnienie sie ze komponent jest mounted przed renderowaniem aby uniknac problemow
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "pl" : "en";
		i18n.changeLanguage(newLang);
		// Store language preference
		localStorage.setItem("i18nextLng", newLang);
	};

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={toggleLanguage}
			aria-label={t("changeLanguage", "Change language")}
			className="flex items-center gap-2">
			<span className="font-medium">
				{i18n.language === "en" ? "PL" : "EN"}
			</span>
		</Button>
	);
}
