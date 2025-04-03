import CtaButton from "../buttons/CtaButton";
import Fade from "../pearls/Fade";
import TextGradient from "../text/TextGradient";

export default function HeroSection() {
  return (
    <section className="font-sans gap-1 flex flex-col h-60 items-end justify-center">
        <div className="w-full flex items-center justify-center h-10 border-t-2 border-green-600">
            <h1>&copy; Copyright 2024-2025</h1>
        </div>
        <div className="w-full h-50 flex items-center justify-center gap-10">
        <div className="h-full flex flex-col justify-center md:text-xl text-lg  pl-3 gap-3">
            <h1 className="font-bold">Ważne linki</h1>
            <a href="">Home</a>
            <a href="">Team</a>
            <a href="">Services</a>
        </div>
        <div className="h-full flex flex-col justify-center md:text-xl text-lg pl-3 gap-3">
        <h1 className="font-bold">Socjale</h1>
            <a href="">Github</a>
            <a href="">Instagram</a>
            <a href="">Discord</a>
        </div>
        <div className="h-full flex flex-col justify-center md:text-xl text-lg pl-3 gap-3">
        <h1 className="font-bold">Inne</h1>
            <a href="">About us</a>
            <a href="">Reviews</a>
            <a href="">Contact</a>
        </div>
    </div>
    </section>
  );
}
