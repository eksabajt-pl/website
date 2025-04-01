import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TextGradient from "../text/TextGradient";
import { Fade } from "react-awesome-reveal";
import image from "./image.png";
import TeamBox from "./teamBox/TeamBox";
import Image from "public/image.png";

export default function Team() {
  const textArray = [
    { name: "Karol", desc: "Opis number: 1", id: 0 },
    { name: "Maciej", desc: "Opis number: 2", id: 1 },
    { name: "Robert", desc: "Opis number: 3", id: 2 },
    { name: "Wojciech", desc: "Opis number: 4", id: 3 },
    { name: "Dawid", desc: "Opis number: 5", id: 4 },
  ];
  return (
    <>
      <div className="w-screen h-screen flex items-center flex-col">
        <div className="text-center font-bold text-4xl flex flex-row gap-2">
          Poznaj nasz <TextGradient> zespół!</TextGradient>
        </div>
        <p className="max-w-120 p-4 text-center">
          Nasz zespół to profesjonalna grupa programistów, która jest gotowa by
          zrealizować twoje marzenie o{" "}
          <b className="font-bold">działającej, praktycznej i ładnej</b> stronie
          internetowej w przystępnej cenie.
        </p>
        <div className="flex flex-row gap-4 flex-wrap min-w-1/2 justify-center">
          {textArray.map((member) => (
            <TeamBox key={member.id} text={member.name} desc={member.desc} />
          ))}
        </div>
      </div>
    </>
  );
}
