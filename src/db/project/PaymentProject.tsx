"use server";
import { getCurrentUserProfile } from "../profile/getCurrentUserProfile";
import { db } from "..";
import { eq, SQLWrapper } from "drizzle-orm";
import { project } from "../schema";
const PaymentProject = async (
  userEmail: string | null,
  ProjectData: number | SQLWrapper
) => {
  const user = await getCurrentUserProfile();
  if (user.email !== userEmail) {
    return { success: false, message: "Unauthorized" };
  }
  const result = await db
    .update(project)
    .set({ phase: "Paid" })
    .where(eq(project.id, ProjectData));
  return { success: true, updatedRows: result };
};

export default PaymentProject;
