"use server";

import { db } from "@/db/index";
import { SelectPortfolio, SelectPortfolioImage, SelectTech } from "../types";

export async function getPortfolio() {
  const result = await db.query.portfolio.findMany({
    with: {
      portfolioImages: true,
      portfolioTech: {
        with: {
          tech: true,
        },
      },
    },
  });
  result.map((row) => {
    // @ts-expect-error yeah idk
    row.portfolioTech = row.portfolioTech.map((item) => ({
      ...item.tech,
    }));
    return row;
  });

  if (!result) {
    console.error("Error fetching reviews");
    return [];
  }

  return result; //.map((val: SelectPortfolioTech) => val.tech as SelectTech);
}

export type PortfolioAll = {
  portfolioImages: SelectPortfolioImage[];
  portfolioTech: SelectTech[];
} & SelectPortfolio;
