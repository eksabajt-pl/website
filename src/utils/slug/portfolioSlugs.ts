import { titleToSlug } from "./slug";

export function getPortfolioSlug(title: string, id: any) {
  return `${titleToSlug(title)}-${id}`;
}
