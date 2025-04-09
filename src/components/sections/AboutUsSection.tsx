"use client";
import BrandWave from "../pearls/BrandWave";
import SectionHeading from "../text/SectionHeading";
import { Card } from "../ui/card";
import Section from "./Section";

interface AboutUsCardProps {
  title: string;
}

function AboutUsCard({ title }: AboutUsCardProps) {
  return (
    <Card className="min-w-2xs px-4 flex-1 flex flex-col">
      <p className="text-xl font-bold">{title}</p>
      <p className="flex-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sit
        porro, excepturi, assumenda qui ipsum voluptatibus provident ea
        voluptates perferendis aut maxime dolor inventore fuga praesentium eaque
        minus possimus voluptatum?
      </p>
    </Card>
  );
}

export default function AboutUsSection() {
  //const isMobile = useMediaQuery({maxWidth:1024});
  return (
    <>
      <BrandWave />
      <Section id="about-us" className="bg-green-600 -my-3">
        <div className="flex gap-2 flex-row max-w-7xl">
          <div className="flex-row flex-2 gap-2 flex flex-wrap justify-center items-center">
            <Card className="w-full flex justify-center items-stretch flex-row p-0  ">
              <SectionHeading
                className="flex-1"
                normal="Poznaj nas, czyli"
                emphasis="eksabajt.pl"
                description="Pytania i odpowiedzi na temat naszej działalności programistycznej"
              />
            </Card>
            <AboutUsCard title="Na rynku od 2025" />
            <AboutUsCard title="Czym się zajmujemy?" />
            <AboutUsCard title="Założenia naszej firmy" />
            <AboutUsCard title="..." />
          </div>
          {/*!isMobile && <div className="p-2 h-full flex flex-col flex-1 gap-2">
            <Image src={"/team.jpg"} width={1024} height={1024} className="flex-1 overflow-hidden rounded-lg" alt="Ambitny zespół młodych programistów - eksabajt.pl"/>
            <Image src={"/team.jpg"} width={1024} height={1024} className="flex-1 overflow-hidden rounded-lg" alt="Ambitny zespół młodych programistów - eksabajt.pl"/>
            <Image src={"/team.jpg"} width={1024} height={1024} className="flex-1 overflow-hidden rounded-lg" alt="Ambitny zespół młodych programistów - eksabajt.pl"/>

          </div>*/}
        </div>
      </Section>
      <BrandWave flipped={true} />
    </>
  );
}
