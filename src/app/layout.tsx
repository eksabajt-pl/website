import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eksabajt.pl - twoje drzwi do świata IT ",
  description:
    "Na Eksabajt.pl masz stały kontakt z twórcami swojej strony dzięki zintegrowanemu komunikatorowi, szybki dostęp do wyceny oraz statusu projektu i możliwość sprawdzenia opinii innych użytkowników. Tworzenie strony jeszcze nigdy nie było tak przejrzyste i wygodne.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo.webp",
    },
  ],
  openGraph: {
    images: "/og.png",
  },
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <main className="flex-1 flex gap-2 flex-col  font-sans ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
