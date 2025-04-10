import { z } from "zod";
const ProjectFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  price: z.coerce.number(),
  type: z.string(),
});
export default ProjectFormSchema;
