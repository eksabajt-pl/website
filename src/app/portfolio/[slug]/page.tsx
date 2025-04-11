import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { PortfolioImageCarousel } from "@/components/carousel/PortfolioImageCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSinglePortfolio } from "@/db/portfolio/getSinglePortfolio";
import { getIdFromSlug } from "@/utils/slug/slug";
import { Code, Github, LucideLink, User } from "lucide-react";
import { isRedirectError } from "next/dist/client/components/redirect-error";

type PortfolioPageParams = {
  params: { slug: string };
};

function NotFound() {
  return <p>not found</p>;
}

export default async function Page({ params }: PortfolioPageParams) {
  const id = getIdFromSlug((await params).slug);
  let portfolio;
  try {
    portfolio = await getSinglePortfolio(id as unknown as bigint);
  } catch (e) {
    if (isRedirectError(e)) {
      throw e;
    }
    return <NotFound />;
  }
  if (!portfolio) {
    return <NotFound />;
  }
  const { title, portfolioImages, shortDescription } = portfolio;
  return (
    <>
      {" "}
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        exercitationem quas quidem pariatur sequi facilis tempora consequuntur.
        Necessitatibus officia molestiae recusandae reiciendis a facere sint?
        Autem commodi veritatis earum quas!
      </p>
      <PortfolioImageCarousel
        className=" rounded-lg overflow-clip"
        imagesClassName="sm:basis-1/2 xl:basis-1/3"
        portfolioImages={portfolioImages}
      />
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Project overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            similique itaque quia accusantium voluptate accusamus fugiat iusto
            eaque soluta vitae dolore aliquam, fuga unde. Officia temporibus
            magnam alias reprehenderit nobis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis, accusantium quibusdam
            eius, eos tenetur voluptatum excepturi odit saepe sequi, neque
            reiciendis dolorem. Voluptates veritatis nulla tempora omnis maiores
            animi! Expedita. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Est similique itaque quia accusantium voluptate accusamus
            fugiat iusto eaque soluta vitae dolore aliquam, fuga unde. Officia
            temporibus magnam alias reprehenderit nobis? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis, accusantium quibusdam
            eius, eos tenetur voluptatum excepturi odit saepe sequi, neque
            reiciendis dolorem. Voluptates veritatis nulla tempora omnis maiores
            animi! Expedita.
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
        <Card className="p-4 max-w-lg w-full flex flex-col gap-2">
          <h4 className="text-lg my-2 font-bold flex flex-row gap-2 items-center ">
            <LucideLink /> Project links
          </h4>
          <Button className="flex flex-row " variant={"secondary"}>
            <Github />
            Github
          </Button>
          <Button variant={"secondary"}>Live demo</Button>
          <h4 className="text-lg my-2 font-bold flex flex-row gap-2 items-center ">
            <Code /> Technologies
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
