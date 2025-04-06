"use client";

import { LucideEye, LucideMessageCircleReply } from "lucide-react";

import { DashboardPage, DashboardSidebar } from "./DashboardSidebar";

const pages: DashboardPage[] = [
  {
    name: "Overview",
    path: "/",
    icon: <LucideEye />,
  },
  { name: "Reviews", path: "/reviews", icon: <LucideMessageCircleReply /> },
  /*
  
  { name: "Chat", path: "/chat", icon: <LucideMessageCircle /> },
  { name: "Progress", path: "/progress", icon: <LucideChartBarIncreasing /> },
  { name: "Receipts", path: "/receipts", icon: <LucideReceipt /> },
  {
    name: "Settings",
    path: "/settings",
    icon: <LucideCog />,
  },*/
];

export default function ClientSidebar() {
  return <DashboardSidebar pages={pages} />;
}
