import slugify from "slugify";

export function titleToSlug(title: string) {
  const uriSlug = slugify(title, {
    lower: true,
    trim: true,
  });

  return encodeURI(uriSlug);
}
export const getIdFromSlug = (slug: string) => slug.split("-").pop();
