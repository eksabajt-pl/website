"use server";
import { db } from "..";
import { eq, desc } from "drizzle-orm";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { project, profile } from "../schema";
import ProjectCard from "@/components/cards/ProjectCard";
import PaymentButton from "@/components/buttons/Project/PaymentButton";
import DetailsButton from "@/components/buttons/Project/detailsButton";
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
    <div className="grid grid-cols-4 h-full w-full">
      {result.map((item, key): Iterable<React.ReactNode> => {
        return [
          <ProjectCard
            title={`Project type: ${item.project.type}`}
            description={`${item.project.phase || undefined} - ${item.project.price || undefined}`}
            className="overscroll-none w-[100%]"
            key={key}
          >
            <p>
              {user.userGroup === "admin" ? "Email klienta: " : "Twój email: "}
              {item.project.email}
            </p>
            <p>Link do Projektu: {item.project.link}</p>
            {item.project.phase === "Unpaid" ? (
              <PaymentButton
                email={item.profile.email}
                projectId={item.project.id}
              />
            ) : (
              <button className="rounded-lg bg-background text-foreground p-2">
                Zobacz Status
              </button>
            )}
            <div>
              <DetailsButton ProjectId={item.project.id} />
            </div>
          </ProjectCard>,
        ];
      })}
    </div>
  );
};
export default GetAllProjects;
