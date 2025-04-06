import { PropsWithChildren, Suspense } from "react";
import DashboardHeader from "@/components/header/DashboardHeader";
import Dashboard from "@/components/dashboards/Dashboard";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <>
        {" "}
        <DashboardHeader />
        <Suspense>
          <Dashboard>{children}</Dashboard>
        </Suspense>
      </>
    </div>
  );
}
