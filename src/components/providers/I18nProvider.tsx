"use client";

import {ReactNode, useEffect, useState} from "react";
import i18n from "@/i18n";
import {I18nextProvider} from "react-i18next";

interface I18nProviderProps {
	children: ReactNode;
}

export default function I18nProvider({children}: I18nProviderProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
