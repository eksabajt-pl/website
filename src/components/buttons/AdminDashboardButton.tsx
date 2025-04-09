"use client";
import HeaderButton from "./HeaderButton";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Link href="/dashboard" aria-label="Dashboard link">
      <HeaderButton>
        <LayoutDashboardIcon />
      </HeaderButton>
    </Link>
  );
}
