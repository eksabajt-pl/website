"use server";

import { db } from "@/db/index";
import { eq } from "drizzle-orm";
import { portfolio } from "../schema";

export async function getSinglePortfolio(id: bigint) {
  const result = await db.query.portfolio.findFirst({
    where: eq(portfolio.id, id),
    with: {
      portfolioImages: true,
      portfolioTech: {
        with: {
          tech: true,
        },
      },
    },
  });
  // @ts-expect-error yeah idk
  result.portfolioTech = result.portfolioTech.map((item) => ({
    ...item.tech,
  }));

  if (!result) {
    throw Error("Not found");
  }

  return result; //.map((val: SelectPortfolioTech) => val.tech as SelectTech);
}
