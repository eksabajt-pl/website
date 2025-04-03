import Header from "@/components/header/Header";
import ReviewsSection from "@/components/sections/ReviewSection";
import Contact from "@/components/contact/Contact";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";
import Team from "@/components/team/Team";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<BrandWave />
			<ReviewsSection />
			<Team/>
			<Contact />
		</>
	);
}
