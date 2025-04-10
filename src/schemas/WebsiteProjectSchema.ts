import { z } from "zod";
const WebsiteProjectSchema = z.object({
  Title: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email"),
  Description: z.string(),
  Link: z.string().url(),
});
export default WebsiteProjectSchema;
