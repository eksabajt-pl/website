"use server";

import { db } from "@/db/index";
import {
  SelectPortfolio,
  SelectPortfolioFeatures,
  SelectPortfolioImage,
  SelectTech,
} from "../types";
import { eq } from "drizzle-orm";

export async function getPortfolio() {
  const result = await db.query.portfolio.findMany({
    where: (portfolio) => eq(portfolio.draft, false),
    with: {
      portfolioFeatures: {
        orderBy: (portfolioFeatures, { asc }) => [asc(portfolioFeatures.order)],
      },
      portfolioImages: {
        orderBy: (portfolioImages, { asc }) => [asc(portfolioImages.order)],
      },
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
  portfolioFeatures: SelectPortfolioFeatures[];
} & SelectPortfolio;
