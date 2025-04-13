import {TeamMemberType} from "../types/TeamMemberType";
import {useTranslation} from "react-i18next";

const getTeamMembers = (t: (key: string) => string): TeamMemberType[] => [
	{
		name: "Robert",
		email: "dev@rplawski.pl",
		title: "Fullstack developer",
		website: "https://robertplawski.pl",
		motto: t("mottos.robert"),
		profilePicture: "/team/robert.webp",
	},
	{
		name: "Dawid",
		email: "sudnickidawid@gmail.com",
		title: "Fullstack developer",
		website: "https://panwor.vercel.app",
		motto: t("mottos.dawid"),
		profilePicture: "/team/dawid.png",
	},
	{
		name: "Karol",
		email: "synowieckikarol7@gmail.com",
		title: "Business manager",
		website: "https://github.com/Syneczek",
		motto: t("mottos.karol"),
		profilePicture: "/team/karol.png",
	},
	{
		profilePicture: "/team/wojciech.png",
		name: "Wojciech",
		title: "Senior prompt engineer",
		motto: t("mottos.wojciech"),
		website: "https://w0jtases.github.io/",
		email: "wjtases@gmail.com",
	},
	{
		name: "Maciej",
		email: "maciekp371@gmail.com",
		title: "Product-focused developer",
		website: "https://mpotrz.pl",
		motto: t("mottos.maciej"),
		profilePicture: "/team/maciej.png",
	},
	{
		name: "Axel",
		email: "axel.kontakt.eksabajt@wp.pl",
		title: "Customer service manager",
		motto: t("mottos.axel"),
		profilePicture: "/team/axel.png",
	},
];

export default function useTeamMembers() {
	const {t} = useTranslation("team");
	const teamMembers = getTeamMembers(t);
	return {teamMembers};
}
