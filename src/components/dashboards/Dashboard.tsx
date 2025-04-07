import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { PropsWithChildren, Suspense } from "react";
import Sidebar from "../sidebars/Sidebar";
import { DashboardSidebar } from "../sidebars/DashboardSidebar";

export default function Dashboard({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-row flex-1 w-full">
      <Suspense fallback={<DashboardSidebar pages={[]} />}>
        <Sidebar />
      </Suspense>
      <main className="flex-1 flex flex-col gap-4 p-4">
        <Breadcrumbs />
        {children}
      </main>
    </div>
  );
}
