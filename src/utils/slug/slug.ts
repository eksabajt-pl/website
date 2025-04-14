import slugify from "slugify";

export function titleToSlug(title: string) {
  const uriSlug = slugify(title, {
    lower: true,
    trim: true,
  });

  return encodeURI(uriSlug);
}
export const getIdFromSlug = (slug: string) => {
  const idString = slug.split("-").pop();

  if (idString === undefined || idString === null) {
    return NaN; // Or throw an error, depending on your needs
  }

  const id = parseInt(idString, 10);

  if (isNaN(id)) {
    return NaN; // Or throw an error, depending on your needs
  }

  return id;
};
