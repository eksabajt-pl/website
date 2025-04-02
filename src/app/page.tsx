import Header from "@/components/header/Header";
import ReviewsSection from "@/components/review/review";
import Contact from "@/components/contact/Contact";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<BrandWave />
			<ReviewsSection />
			<Contact />
		</>
	);
}
