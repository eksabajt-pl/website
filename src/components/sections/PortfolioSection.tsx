import React, { useEffect, useState } from "react";
import Section from "./Section";
import SectionHeading from "../text/SectionHeading";
import PortfolioProjectCard from "../cards/PortfolioProjectCard";
import { getPortfolio, PortfolioAll } from "@/db/portfolio/getPortfolio";

export default function PortfolioSection() {
  const [portfolio, setPortfolio] = useState<PortfolioAll[]>([]);

  useEffect(() => {
    // @ts-expect-error yeah idk

    getPortfolio().then((value) => setPortfolio(value));
  }, []);
  useEffect(() => {
    console.log("B", portfolio);
  }, [portfolio]);

  return (
    <>
      <Section id="portfolio">
        <SectionHeading
          normal="Przedstawiamy"
          emphasis="Nasze portfolio"
          description="Projekty mniejsze oraz większe, te zlecone przez klientów, oraz nasze oryginalne produkcje, zobacz na żywym przykładzie czym się zajmujemy"
        />
        <div className="flex flex-row gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  grid ">
          {portfolio.map((value, index) => (
            <PortfolioProjectCard key={index} {...value} />
          ))}
        </div>
      </Section>
    </>
  );
}
