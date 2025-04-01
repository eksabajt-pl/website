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
        <div className="bg-blue-500 h-200 w-300 Services-container  gap-4">
          <div className="div1 "></div>
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
