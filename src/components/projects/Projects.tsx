import Header from "@/components/header/Header";
import Contact from "@/components/contact/Contact";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";

import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import CarouselSlot from "../carousel/carouselItem/Carousel";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
	return (
		<>
			<main className="bg-[#4bb651] -my-2 font-sans gap-8 p-8 flex flex-col gap-4  items-center justify-center">
				<div className="flex flex-col w-full gap-16 text-white  justify-center items-center">
					<div className="flex flex-col gap-2 sm:gap-4">
						<div className="flex flex-col gap-8">
							<h1 className="text-4xl font-bold text-center">Nasze projekty</h1>
							<Carousel>
								<CarouselContent>
									<CarouselSlot
										name={"NO! Card game"}
										desc={"Play a card game with your friends, game based on popular UNO card game"}
										banner={"no_bg.png"}
										logo={"no_logo.png"}
									/>
									<CarouselSlot
										name={"NO! Card game"}
										desc={"Play a card game with your friends, game based on popular UNO card game"}
										banner={"no_bg.png"}
										logo={"no_logo.png"}
									/>
									<CarouselSlot
										name={"NO! Card game"}
										desc={"Play a card game with your friends, game based on popular UNO card game"}
										banner={"no_bg.png"}
										logo={"no_logo.png"}
									/>
									<CarouselSlot
										name={"NO! Card game"}
										desc={"Play a card game with your friends, game based on popular UNO card game"}
										banner={"no_bg.png"}
										logo={"no_logo.png"}
									/>
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
