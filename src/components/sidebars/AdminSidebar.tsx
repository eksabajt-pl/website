"use client";

import { LucideEye, LucideMessageCircleReply, LucideUser } from "lucide-react";

import { DashboardPage, DashboardSidebar } from "./DashboardSidebar";

const pages: DashboardPage[] = [
  {
    name: "Overview",
    path: "/",
    icon: <LucideEye />,
  },
  { name: "Reviews", path: "/reviews", icon: <LucideMessageCircleReply /> },
  { name: "Users", path: "/users", icon: <LucideUser /> },
  /*{
    name: "Content management",
    path: "/content-management",
    icon: <LucideText />,
  },
  { name: "Analytics", path: "/analytics", icon: <LucideCircleGauge /> },
  {
    name: "Settings",
    path: "/settings",
    icon: <LucideCog />,
  },*/
];

export default function AdminSidebar() {
  return <DashboardSidebar pages={pages} />;
}
