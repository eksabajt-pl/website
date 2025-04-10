import React from "react";
import Section from "./Section";
import SectionHeading from "../text/SectionHeading";

export default function ProjectsSection() {
	return (
		<>
			<Section id="projects">
				<SectionHeading
					normal="Przedstawiamy"
					emphasis="Nasze realizacje"
					description="Projekty mniejsze oraz większe, te zlecone przez klientów, oraz nasze oryginalne produkcje, zobacz na żywym przykładzie czym się zajmujemy"
				/>
			</Section>
		</>
	);
}
