import type { MetadataRoute } from "next";

export async function generatePortfolioSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}
import { BASE_URL } from "@/lib/constants";
import { getPortfolio } from "@/db/portfolio/getPortfolio";
import { getPortfolioSlug } from "@/utils/slug/portfolioSlugs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const portfolio = await getPortfolio();
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily", // yearly
      priority: 1,
    },

    {
      url: `${BASE_URL}/feedback`,
      lastModified: new Date(),
      changeFrequency: "daily", // yearly
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/dashboard`,
      lastModified: new Date(),
      changeFrequency: "daily", // yearly
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "daily", // monthly
      priority: 0.8,
    },
    ...portfolio.map(({ title, id }) => ({
      url: `${BASE_URL}/portfolio/${getPortfolioSlug(title, id)}`,
      priority: 0.5,
    })),
  ];
}
