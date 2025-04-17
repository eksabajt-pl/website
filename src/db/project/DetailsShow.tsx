import DetailsButton from "@/components/buttons/Project/detailsButton";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
type ProjectType = {
  ProjectId: number;
};
const DetailsShow = async (ProjectId: ProjectType) => {
  const user = await getCurrentUserProfile();
  if (user.userGroup !== "admin") {
    return <div></div>;
  }

  return <DetailsButton ProjectId={ProjectId.ProjectId} />;
};
export default DetailsShow;
