"use server";
import GetAllProjects from "@/db/project/getAllProjects";
import ProjectPanel from "./ProjectPanel";
const Page = async () => {
  return (
    <>
      <ProjectPanel></ProjectPanel>
      <div className="flex flex-row h-100 max-w">{GetAllProjects()}</div>
    </>
  );
};
export default Page;
