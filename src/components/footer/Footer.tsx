import BrandWave from "../pearls/BrandWave";

export default function HeroSection() {
	return (
		<>
			<BrandWave />
			<footer className="text-white font-sans gap-8 -mt-16 flex flex-col items-end justify-center p-8 pt-0 bg-green-600">
				<div className="w-full text-sm sm:text-base flex flex-col text-center sm:text-left sm:flex-row items-center sm:items-start justify-center gap-8 sm:gap-32">
					<div className="h-full flex flex-col justify-start pl-3 gap-3">
						<h1 className="font-bold">Kontakt</h1>
						<a href="">Github</a>
						<a href="mailto:kontakt@eksabajt.pl">E-mail</a>
					</div>
					<div className="h-full flex flex-col justify-start pl-3 gap-3">
						<h1 className="font-bold">Dane firmy</h1>
						<p>EksabajtPl Sp. z o.o.</p>
						<p>ul. Jana Pawła</p>
						<p>01-001 Warszawa</p>
						<p>KRS </p>
						<p>NIP</p>
						<p>REGON</p>
					</div>
					<nav className="h-full flex flex-col justify-start pl-3 gap-3">
						<h1 className="font-bold">Nawigacja</h1>
						<a href="#home">Home</a>
						<a href="#about-us">About us</a>
						<a href="#team">Team</a>
						<a href="#reviews">Reviews</a>
						<a href="#contact">Contact</a>
					</nav>
				</div>
				<div className="w-full flex items-center justify-center text-sm sm:text-base text-center ">
					<h1>
						&copy;{new Date().getFullYear()} Wszelkie prawa zastrzeżone,
						eksabajt.pl{" "}
					</h1>
				</div>
			</footer>
		</>
	);
}
