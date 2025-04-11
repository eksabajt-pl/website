"use client";

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	// ladowanie tłumaczeń przez http -> folder /public/locales
	.use(Backend)
	// wykrycie jezyka uzytkownika
	.use(LanguageDetector)
	// przekazanie instancji i18n do react-i18next
	.use(initReactI18next)
	// inicjalizacja i18next
	.init({
		fallbackLng: "en",
		debug: process.env.NODE_ENV === "development",
		supportedLngs: ["en", "pl"],

		interpolation: {
			escapeValue: false, // niepotrzebne dla reacta bo ucieka domyslnie
		},

		// Opcje backendu
		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json",
		},

		// Domyślny namespace
		defaultNS: "common",
		ns: [
			"common",
			"home",
			"about",
			"contact",
			"pricing",
			"projects",
			"reviews",
			"team",
			"dashboard",
		],
	});

export default i18n;
