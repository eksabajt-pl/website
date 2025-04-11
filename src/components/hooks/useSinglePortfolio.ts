"use client";
import { PortfolioAll } from "@/db/portfolio/getPortfolio";
import { getSinglePortfolio } from "@/db/portfolio/getSinglePortfolio";

import { useEffect, useState } from "react";

export const useSinglePortfolio = (id: bigint) => {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioAll | null>(null);

  useEffect(() => {
    setLoading(false);
    getSinglePortfolio(id)
      // @ts-expect-error yeah idk
      .then((value) => setPortfolio(value))
      .finally(() => setLoading(true));
  }, [id]);
  return { portfolio, loading };
};
