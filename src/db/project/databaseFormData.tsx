"use server";
import { db } from "..";
import { eq } from "drizzle-orm";
import { project } from "../schema";
type ProjectType = {
  ProjectId: number;
};
const ProjectDataFn = async (ProjectId: ProjectType) => {
  const [ProjectFormData] = await db
    .select()
    .from(project)
    .where(eq(project.id, ProjectId.ProjectId));
  return ProjectFormData;
};
export default ProjectDataFn;
