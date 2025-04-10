"use server";
import ProjectCard from "@/components/cards/ProjectCard";
import UserProjectForm from "@/components/forms/UserProjectForm";
import WebsiteProjectForm from "@/components/forms/WebsiteProjectFrom";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";

const ProjectPanel = async () => {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") return [];
  return (
    <div className="grid auto-rows-[25rem] auto-cols-[15rem] max-w-4xl grid-cols-1 sm:grid-cols-2 gap-4 ">
      <ProjectCard
        className="w-[90%]"
        description="Create view for user"
        title="New Project"
      >
        <UserProjectForm />
      </ProjectCard>
      <ProjectCard
        className="w-[90%]"
        description="coming soon"
        title="New Web Project"
      >
        <WebsiteProjectForm></WebsiteProjectForm>
      </ProjectCard>
    </div>
  );
};
export default ProjectPanel;
