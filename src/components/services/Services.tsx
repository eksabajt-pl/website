import GridBackground from "@/components/background/GridBackground";
import CtaButton from "@/components/buttons/CtaButton";
import Header from "@/components/header/Header";
import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";
import Wave from "react-wavify";

export default function Home() {
  return (
    <>
      <GridBackground />
      <main className="font-sans gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
        <div className="h-200 w-300 Services-container  gap-4">
          <div className="div1 flex flex-col gap-2 pl-8">
          <TextGradient>
           <p className="text-3xl mt-8">Website</p>
          </TextGradient>
          <h2 className="text-3xl font-bold">
            Cena do ustalenia
          </h2>
            <p> Bez ogarniczeń do twojej witryny internetowej.</p>
            <ul className="flex items-start gap-2 flex-col list-none ml-3">
              <span className="flex flex-row items-center gap-2 h-6">
                <img src="chm.svg" className="h-full" />
                <li>Nowoczesne i unikalne projekty</li>
              </span>
              <span className="flex flex-row items-center gap-2 h-6">
                <img src="chm.svg" className="h-full" />
                <li>Responsywność</li>
              </span>
              <span className="flex flex-row items-center gap-2 h-6">
                <img src="chm.svg" className="h-full" />
                <li>Optymalny kod</li>
              </span>
              <span className="flex flex-row items-center gap-2 h-6">
                <img src="chm.svg" className="h-full" />
                <li>Łatwy i czytelny kod</li>
              </span>
            </ul>
            <div className="h-full flex justify-end items-end p-8">
          <TextGradient>
            <a href="#kontakt">
              <p className="text-xl">Zamów już teraz</p>
            </a>
          </TextGradient>
            </div>
          </div>
          <div className="div2 "></div>
          <div className="div3 "></div>
          <div className="div4 "></div>
        </div>
      </main>
      <Wave fill="url(#gradient)">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="oklch(0.627 0.194 149.214)" />
            <stop offset="90%" stopColor="#4bb651" />
          </linearGradient>
        </defs>
      </Wave>
    </>
  );
}
