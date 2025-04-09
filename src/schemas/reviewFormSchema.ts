import { z } from "zod";
export const reviewFormSchema = z.object({
  stars: z.coerce
    .number()
    .min(1, "Please select a rating")
    .max(5, "Please select a rating"),
  content: z
    .string()
    .min(1, "Content cannot be empty")
    .max(280, "Content cannot be too long"),
});
