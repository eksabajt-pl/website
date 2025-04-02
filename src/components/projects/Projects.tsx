import Header from "@/components/header/Header";
import Contact from "@/components/contact/Contact";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";

import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export default function Home() {
  return (
    <>
      <BrandWave />
            <main className="font-sans gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
              <div className="flex flex-col w-full gap-16  justify-center items-center">
                <div className="flex flex-col gap-2 sm:gap-4">
                    <div className="flex flex-col gap-2 sm:gap-4">
                        <h1 className="text-4xl font-bold text-center">
                        Nasze projekty
                        </h1>
                        <Carousel>
                            <CarouselContent>
                            <CarouselItem className="1/2 flex items-center justify-center">
                                    <div className="w-110 h-130 border-3 border-green-600 rounded-3xl">
                                    <div className="w-full h-3/6 rounded-t-2xl flex items-center bg-[#32a834] p-3 gap-4 relative">
                                        <img src="no_bg.png" className="h-full w-full rounded-3xl" />
                                        <div className="h-22 w-22 z-10 bg-white absolute border-8 border-[#32a834] rounded-xl top-50 left-80">
                                            
                                            <img src="no_logo.png" className="h-full w-full rounded-sm" />
                                        </div>
                                        </div>
                                    <div className="w-full h-2/6 flex pl-4 flex-col bg-[#32a834] gap-4">
                                     <a className="flex flex-row items-center gap-2" href="https://github.com/robertplawski/a-card-game"><h1 className="text-2xl">NO! Card game </h1><SquareArrowOutUpRight size={20} /></a> 
                                     <p className="text-lg">Play a card game with your friends, game based on popular UNO card game</p>
                                    </div>
                                        <div className="h-1/6 w-full text-xl font-bold rounded-b-3xl bg-[#32a834] rounded-b-xl flex items-center gap-3 justify-start pl-4">
                                            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4"><SiSocketdotio /> Socket io</p> 
                                            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4"><FaReact /> React</p> 
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="1/2 flex items-center justify-center">
                                    <div className="w-110 h-130 border-3 border-green-600 rounded-3xl">
                                    <div className="w-full h-3/6 rounded-t-2xl flex items-center bg-[#32a834] p-3 gap-4 relative">
                                        <img src="no_bg.png" className="h-full w-full rounded-3xl" />
                                        <div className="h-22 w-22 z-10 bg-white absolute border-8 border-[#32a834] rounded-xl top-50 left-80">
                                            
                                            <img src="no_logo.png" className="h-full w-full rounded-sm" />
                                        </div>
                                        </div>
                                    <div className="w-full h-2/6 flex pl-4 flex-col bg-[#32a834] gap-4">
                                     <a className="flex flex-row items-center gap-2" href="https://github.com/robertplawski/a-card-game"><h1 className="text-2xl">NO! Card game </h1><SquareArrowOutUpRight size={20} /></a> 
                                     <p className="text-lg">Play a card game with your friends, game based on popular UNO card game</p>
                                    </div>
                                        <div className="h-1/6 w-full text-xl font-bold rounded-b-3xl bg-[#32a834] rounded-b-xl flex items-center gap-3 justify-start pl-4">
                                            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4"><SiSocketdotio /> Socket io</p> 
                                            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4"><FaReact /> React</p> 
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="1/2 flex items-center justify-center">
                                    <div className="w-110 h-130 border-3 border-green-600 rounded-3xl">
                                    <div className="w-full h-3/6 rounded-t-2xl flex items-center bg-[#32a834] p-3 gap-4 relative">
                                        <img src="no_bg.png" className="h-full w-full rounded-3xl" />
                                        <div className="h-22 w-22 z-10 bg-white absolute border-8 border-[#32a834] rounded-xl top-50 left-80">
                                            
                                            <img src="no_logo.png" className="h-full w-full rounded-sm" />
                                        </div>
                                        </div>
                                    <div className="w-full h-2/6 flex pl-4 flex-col bg-[#32a834] gap-4">
                                     <a className="flex flex-row items-center gap-2" href="https://github.com/robertplawski/a-card-game"><h1 className="text-2xl">NO! Card game </h1><SquareArrowOutUpRight size={20} /></a> 
                                     <p className="text-lg">Play a card game with your friends, game based on popular UNO card game</p>
                                    </div>
                                        <div className="h-1/6 w-full text-xl font-bold rounded-b-3xl bg-[#32a834] rounded-b-xl flex items-center gap-3 justify-start pl-4">
                                            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4"><SiSocketdotio /> Socket io</p> 
                                            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4"><FaReact /> React</p> 
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            </Carousel>
                    </div>
                </div>
              </div>
            </main>
    </>
  );
}