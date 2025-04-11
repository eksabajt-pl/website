import React from "react";
import Section from "./Section";
import SectionHeading from "../text/SectionHeading";
import {useTranslation} from "react-i18next";

export default function ProjectsSection() {
	const {t} = useTranslation("projects");

	return (
		<>
			<Section id="projects">
				<SectionHeading
					normal={t("section.title")}
					emphasis={t("section.emphasis")}
					description={t("section.description")}
				/>
			</Section>
		</>
	);
}
