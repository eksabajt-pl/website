"use client";
import PortfolioProjectCard, {
  PortfolioProjectSkeletonCard,
} from "../cards/PortfolioProjectCard";
import { usePortfolio } from "../hooks/usePortfolio";

export function PortfolioProjectsLists({
  maxProjectsCount = 2137,
}: {
  maxProjectsCount?: number;
}) {
  const { portfolio, loading } = usePortfolio();

  return (
    <div className="flex flex-row gap-4  grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  grid ">
      {loading ? (
        <PortfolioProjectSkeletonCard />
      ) : (
        portfolio
          .slice(0, maxProjectsCount)
          .map((value, index) => (
            <PortfolioProjectCard key={index} {...value} />
          ))
      )}
    </div>
  );
}
