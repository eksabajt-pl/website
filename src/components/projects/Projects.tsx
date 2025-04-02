import Header from "@/components/header/Header";
import Contact from "@/components/contact/Contact";
import BrandWave from "@/components/pearls/BrandWave";
import HeroSection from "@/components/sections/HeroSection";

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
                                    <div className="w-70 h-100 border-3 border-green-600 rounded-3xl">
                                    
                                        <div className="w-full h-1/5 rounded-t-3xl flex items-center pl-4 gap-4">
                                        <img src="robert.jpeg" className="h-16 rounded-full" />
                                        <h1 className="text-xl font-bold">Robert Pławski</h1>
                                        </div>
                                    <div className="w-full h-3/5 flex items-center flex-col pl-4 gap-4">
                                     <h1 className="text-2xl">Title</h1>
                                     <p className="text-lg">[opis...]</p>
                                    </div>
                                        <div className="h-1/5 w-full rounded-b-3xl flex items-center justify-end pr-4">
                                            <button className="bg-green-500 py-4 px-8 rounded-3xl">Zobacz</button>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="1/2 flex items-center justify-center">
                                    <div className="w-70 h-100 border-3 border-green-600 rounded-3xl">
                                    
                                        <div className="w-full h-1/5 rounded-t-3xl flex items-center pl-4 gap-4">
                                        <img src="robert.jpeg" className="h-16 rounded-full" />
                                        <h1 className="text-xl font-bold">Robert Pławski</h1>
                                        </div>
                                    <div className="w-full h-3/5 flex items-center flex-col pl-4 gap-4">
                                     <h1 className="text-2xl">Title</h1>
                                     <p className="text-lg">[opis...]</p>
                                    </div>
                                        <div className="h-1/5 w-full rounded-b-3xl flex items-center justify-end pr-4">
                                            <button className="bg-green-500 py-4 px-8 rounded-3xl">Zobacz</button>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="1/2 flex items-center justify-center">
                                    <div className="w-70 h-100 border-3 border-green-600 rounded-3xl">
                                    
                                        <div className="w-full h-1/5 rounded-t-3xl flex items-center pl-4 gap-4">
                                        <img src="robert.jpeg" className="h-16 rounded-full" />
                                        <h1 className="text-xl font-bold">Robert Pławski</h1>
                                        </div>
                                    <div className="w-full h-3/5 flex items-center flex-col pl-4 gap-4">
                                     <h1 className="text-2xl">Title</h1>
                                     <p className="text-lg">[opis...]</p>
                                    </div>
                                        <div className="h-1/5 w-full rounded-b-3xl flex items-center justify-end pr-4">
                                            <button className="bg-green-500 py-4 px-8 rounded-3xl">Zobacz</button>
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