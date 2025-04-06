"use client";

import { LucideArrowLeftToLine, LucideArrowRightToLine } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

export type DashboardPage = {
  name: string;
  path: string;
  icon: ReactNode;
};

interface SidebarListProps {
  pages: DashboardPage[];
}

export function DashboardSidebar({ pages }: SidebarListProps) {
  const [extended, setExtended] = useState(false);

  return (
    <div className="flex flex-col  bg-neutral-100 dark:bg-neutral-900">
      <div className="  p-4 pr-6 h-full ">
        <nav
          className={twMerge(
            " flex flex-col gap-2 transition-[width] transition-200 w-6 overflow-clip text-nowrap items-start gap-4",
            extended && "w-52"
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
          {pages.map((page: DashboardPage) => (
            <Link href={"/dashboard" + page.path} key={page.name}>
              <li
                key={page.name}
                className="cursor-pointer flex flex-row gap-2"
              >
                {page.icon}
                <p>{page.name}</p>
              </li>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
