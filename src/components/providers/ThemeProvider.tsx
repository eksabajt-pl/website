"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useMounted } from "../hooks/useMounted";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const mounted = useMounted();
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
