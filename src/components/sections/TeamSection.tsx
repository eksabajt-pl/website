import useTeamMembers from "../hooks/useTeamMembers";
import SectionHeading from "../text/SectionHeading";
import TeamMemberCard from "../cards/TeamMemberCard";
import Section from "./Section";

export default function TeamSection() {
  const { teamMembers } = useTeamMembers();

  return (
    <Section id="team">
      <SectionHeading
        normal="Zobacz, poznaj"
        emphasis="Nasz zespół"
        description="Nasz zespół to profesjonalna grupa programistów, która jest gotowa by
          zrealizować twoje marzenie o
          działającej, praktycznej i ładnej stronie
          internetowej w przystępnej cenie."
      />

      <div className="flex flex-row  gap-4 flex-wrap min-w-1/2 max-w-7xl justify-center">
        {teamMembers.map((props, index) => (
          <TeamMemberCard key={index} {...props} />
        ))}
      </div>
    </Section>
  );
}
