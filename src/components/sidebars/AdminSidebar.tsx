"use client";

import {
  LucideEye,
  LucideProjector,
  LucideMessageCircleReply,
} from "lucide-react";

import { DashboardPage, DashboardSidebar } from "./DashboardSidebar";

const pages: DashboardPage[] = [
  {
    name: "Overview",
    path: "/",
    icon: <LucideEye />,
  },
  { name: "Reviews", path: "/reviews", icon: <LucideMessageCircleReply /> },
  {
    name: "Projects",
    path: "/projects",
    icon: <LucideProjector />,
  },
  /*
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
