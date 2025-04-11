import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { createClient } from "@/utils/supabase/client";
import { SelectPortfolioImage, SelectTech } from "@/db/types";
import { PortfolioAll } from "@/db/portfolio/getPortfolio";
import * as icons from "react-icons/si";
import { getPortfolioSlug } from "@/utils/slug/portfolioSlugs";

const TechnologyBadge = ({ name, icon }: SelectTech) => {
  return (
    <Badge variant="outline" color="secondary">
      {/* @ts-expect-error cus there is not a type */}
      {icons[icon || "SiReact"]()}
      {name}
    </Badge>
  );
};

const CarouselPortfolioImage = ({
  label,
  path,
  //= "https://placehold.co/600x400/777/31343C",
}: SelectPortfolioImage) => {
  const [src, setSrc] = useState<string | null>(null);
  useEffect(() => {
    const payload = async () => {
      if (!path) {
        setSrc("https://placehold.co/600x400/777/31343C?text=placeholder");
        return;
      }
      const supabase = await createClient();
      const { data } = await supabase.storage
        .from("portfolio")
        .getPublicUrl(path);

      setSrc(data.publicUrl);
    };

    payload();
  }, []);

  return (
    <CarouselItem className="relative overflow-clip">
      {src && (
        <img
          className="w-full aspect-[4/3] object-cover"
          src={src}
          alt={label!}
        />
      )}
      {label && (
        <p className="absolute p-4 text-white  bottom-0 bg-gradient-to-b  from-transparent to-black w-full">
          {label}
        </p>
      )}
    </CarouselItem>
  );
};

function PortfolioImageCarousel({
  portfolioImages,
}: {
  portfolioImages: SelectPortfolioImage[];
}) {
  return (
    <Carousel className="relative">
      <CarouselContent>
        {portfolioImages.map((props, index) => (
          <CarouselPortfolioImage key={index} {...props} />
        ))}
      </CarouselContent>
      <CarouselNext variant={"ghost"} className="absolute z-10 right-2" />
      <CarouselPrevious variant={"ghost"} className="absolute z-10 left-2" />
    </Carousel>
  );
}

interface TechListProps {
  tech: SelectTech[];
  maxBadgesCount?: number;
}

function TechList({ tech, maxBadgesCount = 3 }: TechListProps) {
  return (
    <CardContent className="pb-6 bg-muted-background gap-2 flex flex-row">
      {tech.slice(0, maxBadgesCount).map((tech, index) => (
        <TechnologyBadge key={index} {...tech} />
      ))}
      {tech.length > maxBadgesCount && (
        <Badge variant={"outline"} color="secondary">
          + {tech.length - maxBadgesCount}
        </Badge>
      )}
    </CardContent>
  );
}

export default function PortfolioProjectCard({
  id,
  title,
  githubUrl,
  liveUrl,
  description,
  author,
  portfolioImages,
  portfolioTech,
}: PortfolioAll) {
  return (
    <Card className="p-0 rounded-lg overflow-clip flex flex-col gap-0  max-w-sm sm:max-w-md">
      <CardHeader className="p-0 flex flex-row justify-center">
        {portfolioImages && (
          <PortfolioImageCarousel portfolioImages={portfolioImages} />
        )}
      </CardHeader>
      <CardContent className="p-6 flex flex-col gap-4 flex-1">
        <p className="text-xl sm:text-2xl font-bold ">{title}</p>
        <p>{description}</p>
      </CardContent>
      <TechList tech={portfolioTech} />
      <CardAction className="p-6 pt-0 flex flex-row flex-wrap justify-between w-full gap-2">
        <div className="gap-2 flex flex-row">
          <Link href={githubUrl!}>
            <Button variant={"outline"} className="cursor-pointer ">
              <FaGithub />
            </Button>
          </Link>
          <Link href={liveUrl!}>
            <Button variant={"outline"} className="cursor-pointer">
              <Play />
              Live
            </Button>
          </Link>
        </div>
        <Link href={`/portfolio/${getPortfolioSlug(title, id)}`}>
          <Button className="cursor-pointer">
            Zobacz więcej
            <ArrowRight />
          </Button>
        </Link>
      </CardAction>
      <CardFooter className="pb-6 text-muted-foreground text-sm">
        Projekt stworzył - {author} z eksabajt.pl
      </CardFooter>
    </Card>
  );
}
