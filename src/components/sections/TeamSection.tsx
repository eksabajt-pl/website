import useTeamMembers from "../hooks/useTeamMembers";
import SectionHeading from "../text/SectionHeading";
import TeamMemberCard from "../cards/TeamMemberCard";
import Section from "./Section";
import {useTranslation} from "react-i18next";

export default function TeamSection() {
	const {teamMembers} = useTeamMembers();
	const {t} = useTranslation("team");

	return (
		<Section id="team">
			<SectionHeading
				normal={t("section.title")}
				emphasis={t("section.emphasis")}
				description={t("section.description")}
			/>

			<div className="flex flex-row  gap-4 flex-wrap min-w-1/2 max-w-7xl justify-center">
				{teamMembers.map((props, index) => (
					<TeamMemberCard key={index} {...props} />
				))}
			</div>
		</Section>
	);
}
