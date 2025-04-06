import { PropsWithChildren } from "react";
import DashboardHeader from "@/components/header/DashboardHeader";
import Dashboard from "@/components/dashboards/Dashboard";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <>
        {" "}
        <DashboardHeader />
        <Dashboard>{children}</Dashboard>
      </>
    </div>
  );
}
