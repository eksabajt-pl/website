import { InsertProject, project } from "../schema";
import { db } from "../index";
const InsertProjectFn = async (data: InsertProject) => {
  await db.insert(project).values(data);
};
export default InsertProjectFn;
