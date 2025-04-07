"use server";
import AdminSidebar from "./AdminSidebar";
import ClientSidebar from "./ClientSidebar";
import { getCurrentUserProfile } from "@/db/profile/getCurrentUserProfile";

export default async function Sidebar() {
  return (await getCurrentUserProfile()).userGroup === "admin" ? (
    <AdminSidebar />
  ) : (
    <ClientSidebar />
  );
}
