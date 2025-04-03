import useTeamMembers from "../hooks/useTeamMembers";
import TextGradient from "../text/TextGradient";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";


export default function Team() {
	const {teamMembers} = useTeamMembers();

	return (
		<>
			<div className="justify-center  min-h-[80vh] flex items-center flex-col p-16 ">
				<div className="text-center font-bold text-5xl flex flex-col max-w-7xl gap-2">
					<p>Poznaj nasz</p> <TextGradient> zespół!</TextGradient>
				</div>
				<p className="max-w-120 p-4 text-center">
					Nasz zespół to profesjonalna grupa programistów, która jest gotowa by
					zrealizować twoje marzenie o{" "}
					<b className="font-bold">działającej, praktycznej i ładnej</b> stronie
					internetowej w przystępnej cenie.
				</p>

				<div className="flex flex-row  gap-4 flex-wrap min-w-1/2 justify-center">
					{teamMembers.map((props,index) => (
						<TeamMemberCard
							key={index}
							{...props}
						/>
					))}
				</div>
			</div>
		</>
	);
}
