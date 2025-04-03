import CtaButton from "../buttons/CtaButton";
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";

export default function HeroSection() {
  return (
    <section className="font-sans gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
      <div className="flex flex-row gap-4 text-5xl justify-center flex-wrap">
        <Fade triggerOnce cascade damping={0.05}>
          Czym jest
        </Fade>
        <TextGradient>
          {" "}
          <Fade
            triggerOnce
            delay={500}
            className="font-bold"
            cascade
            damping={0.05}
          >
            eksabajt?
          </Fade>
        </TextGradient>
      </div>
      <ul className="gap-2 text-md max-w-lg flex-col flex list-disc pl-10">
        <li className="opacity-70">to kolejna jednostka informatyczna po petabajcie</li>
        <li className="opacity-70">to jednostka wynosząca 10^18 bajta</li>
        <li className="opacity-70">to ilość danych globalnie wysyłanych przez internet co godzinę</li>
        <li>
          to {" "}
          <span className="font-bold">zespół profesjonalistów</span>, który: <br/>
          <span className="font-bold">
            wyceni, zaprojektuje i zaprogramuje twoją stronę
          </span>
        </li>
      </ul>
      <Fade delay={5500}>
        <CtaButton />
      </Fade>
    </section>
  );
}
