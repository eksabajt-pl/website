import { PropsWithChildren } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { PortfolioProjectsLists } from "@/components/lists/PortfolioProjectsLists";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="flex flex-col  items-center">
        <main className="w-full max-w-7xl  min-h-screen p-4 flex flex-col gap-8">
          <Breadcrumbs />
          {children} <PortfolioProjectsLists />
        </main>
      </div>
      <Footer />
    </>
  );
}
