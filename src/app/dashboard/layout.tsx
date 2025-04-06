"use server";
import AdminHeader from "@/components/header/AdminHeader";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import { PropsWithChildren } from "react";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session) return await redirect("/signin");

  return (
    <div className="flex flex-col min-h-screen items-center">
      <AdminHeader />
      <div className="flex flex-row flex-1 max-w-7xl w-full">
        <AdminSidebar />
        <main className="flex flex-col gap-2">
          <Breadcrumbs />

          {children}
        </main>
      </div>
    </div>
  );
}
