"use client";

import {
  LucideArrowLeftToLine,
  LucideArrowRight,
  LucideArrowRightToLine,
  LucideCircleGauge,
  LucideCog,
  LucideEye,
  LucideText,
  LucideUser,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const pages = [
  {
    name: "Overview",
    path: "/",
    icon: <LucideEye />,
  },
  {
    name: "General settings",
    path: "/general-settings",
    icon: <LucideCog />,
  },
  { name: "User management", path: "/user-management", icon: <LucideUser /> },
  {
    name: "Content management",
    path: "/content-management",
    icon: <LucideText />,
  },
  { name: "Analytics", path: "/analytics", icon: <LucideCircleGauge /> },
];

function SidebarList() {
  const [extended, setExtended] = useState(false);

  return (
    <nav
      className={twMerge(
        "flex flex-col gap-2 w-8 overflow-clip text-nowrap items-start",
        extended && "w-64"
      )}
    >
      <button
        className="cursor-pointer flex flex-row gap-2"
        onClick={() => setExtended((val) => !val)}
      >
        {extended ? <LucideArrowLeftToLine /> : <LucideArrowRightToLine />}
        <p>Hide</p>
      </button>
      <hr />
      {pages.map((page) => (
        <Link href={"/dashboard" + page.path} key={page.name}>
          <li key={page.name} className="cursor-pointer flex flex-row gap-2">
            {page.icon}
            <p>{page.name}</p>
          </li>
        </Link>
      ))}
    </nav>
  );
}

export default function AdminSidebar() {
  return (
    <div className="flex flex-col p-4">
      <SidebarList />
    </div>
  );
}
