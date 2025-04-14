import { titleToSlug } from "./slug";

export function getPortfolioSlug(title: string, id: bigint) {
  return `${titleToSlug(title)}-${id}`;
}
