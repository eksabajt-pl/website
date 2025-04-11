import Section from "./Section";
import SectionHeading from "../text/SectionHeading";
import { Button } from "../ui/button";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { PortfolioProjectsLists } from "../lists/PortfolioProjectsLists";

export default function PortfolioSection() {
  return (
    <>
      <Section id="portfolio">
        <SectionHeading
          normal="Przedstawiamy"
          emphasis="Nasze portfolio"
          description="Projekty mniejsze oraz większe, te zlecone przez klientów, oraz nasze oryginalne produkcje, zobacz na żywym przykładzie czym się zajmujemy"
        />{" "}
        <PortfolioProjectsLists />
        <Link href="/portfolio#top">
          <Button size="lg" className="text-md cursor-pointer">
            <LinkIcon />
            Zobacz wszystkie...
          </Button>
        </Link>
      </Section>
    </>
  );
}
