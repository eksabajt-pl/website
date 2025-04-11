import { TechList } from "@/components/cards/PortfolioProjectCard";
import { PortfolioImageCarousel } from "@/components/carousel/PortfolioImageCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PortfolioAll } from "@/db/portfolio/getPortfolio";
import { getSinglePortfolio } from "@/db/portfolio/getSinglePortfolio";
import { getPortfolioSlug } from "@/utils/slug/portfolioSlugs";
import { getIdFromSlug } from "@/utils/slug/slug";
import {
  Code,
  Github,
  LucideLink,
  SquareArrowOutUpRight,
  SquareArrowUpRight,
  User,
  UserIcon,
} from "lucide-react";
import {
  isRedirectError,
  RedirectType,
} from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center  gap-2 p-8 py-32 text-center">
      <h1 className="text-4xl font-bold">404 - Nie znaleziono</h1>
      <p className="mt-4 text-lg flex flex-col items-center gap-4">
        Zobacz inne...
      </p>
    </div>
  );
}

interface PortfolioPageParams {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PortfolioPageParams) {
  const id = getIdFromSlug((await params).slug);
  let portfolio: PortfolioAll | null;
  try {
    portfolio = await getSinglePortfolio(id as unknown as bigint);
    if (!portfolio) {
      throw Error("Not found");
    }
    const correctSlug = getPortfolioSlug(portfolio.title, portfolio.id);
    if (correctSlug !== (await params).slug) {
      await redirect(`/portfolio/${correctSlug}`, RedirectType.replace);
    }
  } catch (e) {
    if (isRedirectError(e)) {
      throw e;
    }
    return <NotFound />;
  }
  if (!portfolio) {
    return <NotFound />;
  }
  const { title, portfolioImages, overview, shortDescription } = portfolio;
  return (
    <>
      {" "}
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl mb-4">{shortDescription}</p>
      <PortfolioImageCarousel
        className=" rounded-lg overflow-clip"
        imagesClassName="sm:basis-1/2 xl:basis-1/3"
        portfolioImages={portfolioImages}
      />
      <div className="flex md:flex-row flex-col gap-8">
        <Card className="p-4 flex md:hidden flex-col gap-4">
          <div className="flex flex-row gap-4">
            <Button className="flex flex-row " variant={"secondary"}>
              <Github />
              Github
            </Button>
            <Button variant={"secondary"}>
              <SquareArrowOutUpRight /> Live demo
            </Button>
          </div>
          <div className="text-muted-foreground flex justify-between flex-row gap-2">
            <div className="flex flex-row gap-2">
              <UserIcon />
              {portfolio?.author} z eksabajt.pl
            </div>

            <div className="flex flex-row gap-2">
              <TechList tech={portfolio.portfolioTech} />
            </div>
          </div>
        </Card>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Project overview</h3>
          <p>
            {overview ||
              ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem doloremque illo, natus deleniti inventore facilis perspiciatis repellendus. A nobis veritatis tenetur itaque aliquam fuga incidunt ipsam. Minima, alias ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem doloremque illo, natus deleniti inventore facilis perspiciatis repellendus. A nobis veritatis tenetur itaque aliquam fuga incidunt ipsam. Minima, alias ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem doloremque illo, natus deleniti inventore facilis perspiciatis repellendus. A nobis veritatis tenetur itaque aliquam fuga incidunt ipsam. Minima, alias ab.`}
          </p>
          <h3 className="text-2xl font-bold">Key features</h3>
          <ul>
            <li>Stability</li>
            <li>Rel</li>
            <li>Test</li>
            <li>Test</li>
            <li>test</li>
          </ul>
        </div>
        <Card className="p-4  max-w-lg w-full md:flex flex-col gap-2 hidden">
          <h4 className="text-lg my-2 font-bold flex flex-row gap-2 items-center ">
            <LucideLink /> Project links
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <Button className="cursor-pointer" variant={"secondary"}>
              <Github />
              Github
            </Button>
            <Button className="cursor-pointer" variant={"secondary"}>
              <SquareArrowOutUpRight />
              Live demo
            </Button>
          </div>
          <h4 className="text-lg my-2 font-bold flex flex-col gap-2 items-center ">
            <div className="flex flex-row gap-2 w-full">
              <Code /> Technologies
            </div>
            <div className="flex flex-row gap-2 w-full flex-wrap pt-2">
              <TechList maxBadgesCount={2137} tech={portfolio.portfolioTech} />
            </div>
          </h4>
          <h4 className="text-lg my-2 font-bold flex flex-row gap-2 items-center ">
            <User /> Author
          </h4>
        </Card>
      </div>
      <h2 className="text-3xl font-bold mb-4">Zobacz więcej...</h2>
    </>
  );
}
