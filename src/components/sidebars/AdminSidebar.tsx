"use client";

import {
  LucideCircleGauge,
  LucideEye,
  LucideMessageCircle,
  LucideText,
  LucideUser,
} from "lucide-react";

import { DashboardPage, DashboardSidebar } from "./DashboardSidebar";

const pages: DashboardPage[] = [
  {
    name: "Overview",
    path: "/",
    icon: <LucideEye />,
  },
  { name: "User management", path: "/user-management", icon: <LucideUser /> },
  {
    name: "Content management",
    path: "/content-management",
    icon: <LucideText />,
  },
  { name: "Analytics", path: "/analytics", icon: <LucideCircleGauge /> },
  /*{
    name: "Settings",
    path: "/settings",
    icon: <LucideCog />,
  },*/
];

export default function AdminSidebar() {
  return <DashboardSidebar pages={pages} />;
}
