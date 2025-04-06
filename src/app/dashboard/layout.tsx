"use server";
import AdminHeader from "@/components/header/AdminHeader";
import AdminSidebar from "@/components/sidebars/AdminSidebar";
import { PropsWithChildren } from "react";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import ClientHeader from "@/components/header/ClientHeader";
import ClientSidebar from "@/components/sidebars/ClientSidebar";
import { getCurrentUserGroup } from "@/lib/auth-actions";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen items-center">
      {(await getCurrentUserGroup()) == "admin" ? (
        <>
          {" "}
          <AdminHeader />
          <div className="flex flex-row flex-1 w-full">
            <AdminSidebar />
            <main className="flex flex-col gap-4 p-4">
              <Breadcrumbs />

              {children}
            </main>
          </div>
        </>
      ) : (
        <>
          {" "}
          <ClientHeader />
          <div className="flex flex-row flex-1 w-full">
            <ClientSidebar />
            <main className="flex flex-col gap-4 p-4">
              <Breadcrumbs />
              {children}
            </main>
          </div>
        </>
      )}
    </div>
  );
}

/*
  <ClientHeader />
          <div className="flex flex-row flex-1 w-full">
            <ClientSidebar />
            <main className="flex flex-col gap-4 p-4">
              <Breadcrumbs />

              {children}
            </main>
          </div>*/
