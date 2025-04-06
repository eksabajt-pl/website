"use server";
import { getCurrentUserGroup } from "@/lib/auth-actions";
import AdminSidebar from "./AdminSidebar";
import ClientSidebar from "./ClientSidebar";

export default async function Sidebar() {
  return (await getCurrentUserGroup()) === "admin" ? (
    <AdminSidebar />
  ) : (
    <ClientSidebar />
  );
}
