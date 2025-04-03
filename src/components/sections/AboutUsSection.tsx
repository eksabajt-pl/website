"use client";
import Image from "next/image";
import BrandWave from "../pearls/BrandWave";
import SectionHeading from "../text/SectionHeading";
import { Card } from "../ui/card";
import Section from "./Section";
import { useMediaQuery } from "react-responsive";

interface AboutUsCardProps {
  title: string;
}

function AboutUsCard({ title }: AboutUsCardProps) {
  return (
    <Card className="min-w-2xs px-4 flex-1">
      <p className="text-xl font-bold">{title}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sit
        porro, excepturi, assumenda qui ipsum voluptatibus provident ea
        voluptates perferendis aut maxime dolor inventore fuga praesentium eaque
        minus possimus voluptatum?
      </p>
    </Card>
  );
}

export default function AboutUsSection() {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isTooSmall = useMediaQuery({ maxWidth: 400 });
  return (
    <>
      <BrandWave />
      <Section id="aboutus" className="bg-green-600 -my-2">
        <div className="flex-row max-w-7xl gap-2 flex flex-wrap justify-center items-center">
          <Card className="w-full flex justify-around items-center flex-row p-2">
            {!isMobile && (
              <Image
                height={60}
                width={60}
                alt="Filar naszej działalności"
                src="/pillar.png"
              />
            )}
            {!isTooSmall && (
              <Image
                height={60}
                width={60}
                alt="Filar naszej działalności"
                src="/pillar.png"
              />
            )}
            <SectionHeading
              normal="Filary działalności"
              emphasis="eksabajt.pl"
              description="O to filary pracy w eksabajt.pl"
            />
            {!isTooSmall && (
              <Image
                height={60}
                width={60}
                alt="Filar naszej działalności"
                src="/pillar.png"
              />
            )}
            {!isMobile && (
              <Image
                height={60}
                width={60}
                alt="Filar naszej działalności"
                src="/pillar.png"
              />
            )}
          </Card>
          <AboutUsCard title="Stabilność rozwiązań" />
          <AboutUsCard title="Kooperacja z klientem" />
          <AboutUsCard title="Nowoczesne rozwiązania" />
          <AboutUsCard title="Sprawność integracji" />
        </div>
      </Section>
      <BrandWave flipped={true} />
    </>
  );
}
