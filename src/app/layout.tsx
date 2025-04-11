import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ExpandProvider from "@/components/providers/ExpandProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eksabajt.pl - developers studio",
  description: "...",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo.webp",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ExpandProvider>
            <main className="flex-1 flex gap-2 flex-col">{children}</main>
          </ExpandProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
