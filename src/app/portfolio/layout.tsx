import { PropsWithChildren } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { PortfolioProjectsLists } from "@/components/lists/PortfolioProjectsLists";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="flex flex-col  items-center p-4" id="top">
        <main className="w-full max-w-7xl  min-h-screen  flex flex-col gap-8">
          <Breadcrumbs />
          {children}
          <PortfolioProjectsLists />
        </main>
      </div>
      <Footer />
    </>
  );
}
