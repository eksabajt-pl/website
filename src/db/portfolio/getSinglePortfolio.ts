"use server";

import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { portfolio } from "../schema";
import {
  SelectPortfolio,
  SelectPortfolioImage,
  SelectPortfolioTech,
  SelectTech,
} from "../types";
import { PortfolioAll } from "./getPortfolio";

export async function getSinglePortfolio(id: bigint) {
  const result:
    | (SelectPortfolio & {
        portfolioImages: SelectPortfolioImage[];
        portfolioTech: (SelectPortfolioTech & { tech: SelectTech })[];
      })
    | undefined = await db.query.portfolio.findFirst({
    where: eq(portfolio.id, id),
    with: {
      portfolioFeatures: {
        orderBy: (portfolioFeatures, { asc }) => [asc(portfolioFeatures.order)],
      },
      portfolioImages: true,
      portfolioTech: {
        with: {
          tech: true,
        },
      },
    },
  });

  if (!result) {
    throw Error("Not found");
  }
  // @ts-expect-error its supposed to error
  result.portfolioTech = result.portfolioTech.map((item) => ({
    ...item.tech,
  }));

  return result as unknown as PortfolioAll; //.map((val: SelectPortfolioTech) => val.tech as SelectTech);
}
