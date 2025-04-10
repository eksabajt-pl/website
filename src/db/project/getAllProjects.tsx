"use server";
import { db } from "..";
import { eq, desc } from "drizzle-orm";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { project, profile } from "../schema";
import ProjectCard from "@/components/cards/ProjectCard";
const GetAllProjects = async () => {
  const user = await getCurrentUserProfile();
  const result =
    user.userGroup === "admin"
      ? await db
          .select()
          .from(project)
          .innerJoin(profile, eq(profile.id, project.user_id))
          .orderBy(desc(project.created_at))
      : await db
          .select()
          .from(project)
          .innerJoin(profile, eq(profile.id, project.user_id))
          .where(eq(profile.id, user.id))
          .orderBy(desc(project.created_at));

  if (!result) {
    console.error("getAllProject.tsx");
    return [];
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full">
      {result.map((item, key): Iterable<React.ReactNode> => {
        return [
          <ProjectCard
            title={`Project type: ${item.project.type}`}
            className="overscroll-none w-[90%]"
            key={key}
          >
            {item.project.phase}
          </ProjectCard>,
        ];
      })}
    </div>
  );
};
export default GetAllProjects;
