"use client";

import {useMediaQuery} from "react-responsive";
import {ThemeToggle} from "../buttons/ThemeToggle";
import useLiftOff from "../hooks/useLiftOff";
import {Code2} from "lucide-react";
import ContactIconButton from "../buttons/ContactIconButton";
import AdminDashboardButton from "../buttons/AdminDashboardButton";
import Link from "next/link";
import LanguageSwitcher from "../language/LanguageSwitcher";
import {useTranslation} from "react-i18next";

export default function Header() {
	const {liftOff} = useLiftOff();
	const isMobile = useMediaQuery({maxWidth: 384});
	const {t} = useTranslation("common");

	return (
		<div
			className={` transition-all flex-row flex items-center justify-center sticky top-0 left-0 z-10 w-full  dark:border-neutral-800 border-neutral-300 p-4  border-b-0 ${
				liftOff
					? "dark:bg-neutral-800/40 bg-neutral-100/40 backdrop-blur-sm border-b-1"
					: ""
			}`}>
			<div className="flex flex-row justify-between max-w-7xl w-full items-center">
				<Link href="/#">
					<div className="font-mono flex flex-row gap-2 items-center">
						<div className="p-1 font-bold max-w-md text-white flex flex-row gap-2 bg-green-600 hover:bg-green-500 transition-color cursor-pointer rounded-sm">
							<Code2 />
						</div>
						{!isMobile && <span>{t("site.name", "eksabajt.pl")}</span>}
					</div>
				</Link>
				<div className="flex flex-row gap-1">
					<AdminDashboardButton />
					<ThemeToggle />
					<LanguageSwitcher />
					<ContactIconButton />
				</div>
			</div>
		</div>
	);
}
