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

import { SelectTech } from "@/db/types";
import { PortfolioAll } from "@/db/portfolio/getPortfolio";
import * as icons from "react-icons/si";
import { getPortfolioSlug } from "@/utils/slug/portfolioSlugs";
import { PortfolioImageCarousel } from "../carousel/PortfolioImageCarousel";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const TechnologyBadgeContent = ({
  name,
  icon,
}: {
  name: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-row gap-1 items-center">
      {/* @ts-expect-error cus there is not a type */}
      {icons[icon || "SiReact"]()} {name}
    </div>
  );
};

interface TechListProps {
  tech: SelectTech[];
  maxBadgesCount?: number;
}

export function TechList({ tech, maxBadgesCount = 3 }: TechListProps) {
  return (
    <>
      {" "}
      {tech.slice(0, maxBadgesCount).map(({ name, icon }, index) => (
        <Badge variant="outline" color="secondary" key={index}>
          <TechnologyBadgeContent name={name} icon={icon} />
        </Badge>
      ))}
      {tech.length > maxBadgesCount && (
        <Tooltip>
          <TooltipTrigger>
            <Badge variant={"outline"} color="secondary">
              + {tech.length - maxBadgesCount}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            {tech
              .slice(maxBadgesCount, tech.length)
              .map(({ name, icon }: SelectTech, index) => (
                <TechnologyBadgeContent key={index} name={name} icon={icon} />
              ))}
          </TooltipContent>
        </Tooltip>
      )}
    </>
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
      <CardContent className="pb-6 bg-muted-background gap-2 flex flex-row">
        <TechList tech={portfolioTech} />
      </CardContent>
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
