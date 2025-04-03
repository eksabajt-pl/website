import TextGradient from "../text/TextGradient";
import TeamBox from "./teamBox/TeamBox";

export default function Team() {
	const textArray = [
		{ name: "Karol", desc: "Opis number: 1", id: 0, delay: 200 },
		{ name: "Maciek", desc: "Opis number: 2", id: 1, delay: 400 },
		{ name: "Robert", desc: "Opis number: 3", id: 2, delay: 600 },
		{ name: "Wojtek", desc: "Opis number: 4", id: 3, delay: 800 },
		{ name: "Dawid", desc: "Opis number: 5", id: 4, delay: 1000 },
	];
	return (
		<>
			<div className="w-screen min-h-[70vh] flex items-center flex-col p-16">
				<div className="text-center font-bold text-5xl flex flex-col gap-2">
					<p>Poznaj nasz</p> <TextGradient> zespół!</TextGradient>
				</div>
				<p className="max-w-120 p-4 text-center">
					Nasz zespół to profesjonalna grupa programistów, która jest gotowa by
					zrealizować twoje marzenie o{" "}
					<b className="font-bold">działającej, praktycznej i ładnej</b> stronie
					internetowej w przystępnej cenie.
				</p>

				<div className="flex flex-row gap-4 flex-wrap min-w-1/2 justify-center">
					{textArray.map((member) => (
						<TeamBox
							key={member.id}
							text={member.name}
							desc={member.desc}
							delay={member.delay}
						/>
					))}
				</div>
			</div>
		</>
	);
}
