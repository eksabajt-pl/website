"use client";
import { getPortfolio, PortfolioAll } from "@/db/portfolio/getPortfolio";
import { useEffect, useState } from "react";

export const usePortfolio = () => {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioAll[]>([]);

  useEffect(() => {
    setLoading(true);
    getPortfolio()
      // @ts-expect-error yeah idk
      .then((value) => setPortfolio(value))
      .finally(() => setLoading(false));
  }, []);
  return { portfolio, loading };
};
