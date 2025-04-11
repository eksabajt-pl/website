"use client";
import PortfolioProjectCard from "../cards/PortfolioProjectCard";
import { usePortfolio } from "../hooks/usePortfolio";

export function PortfolioProjectsLists() {
  const { portfolio } = usePortfolio();

  return (
    <div className="flex flex-row gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  grid ">
      {portfolio.map((value, index) => (
        <PortfolioProjectCard key={index} {...value} />
      ))}
    </div>
  );
}
