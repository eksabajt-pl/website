import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { CarouselItem } from "@/components/ui/carousel";

// Define the type of the props
interface MyComponentProps {
  name: string;
  desc: string;
  banner: string;
  logo: string;
}

const CarouselSlot: React.FC<MyComponentProps> = ({
  name,
  desc,
  banner,
  logo,
}) => {
  return (
    <>
      <CarouselItem className="1/2 flex items-center justify-center">
        <div className="w-110 h-130 border-3 border-green-600 rounded-3xl">
          <div className="w-full h-3/6 rounded-t-2xl flex items-center bg-[#32a834] p-3 gap-4 relative">
            <img src={banner} className="h-full w-full rounded-3xl" />
            <div className="h-22 w-22 z-10 bg-white absolute border-8 border-[#32a834] rounded-xl top-50 left-80">
              <img src={logo} className="h-full w-full rounded-sm" />
            </div>
          </div>
          <div className="w-full h-2/6 flex pl-4 flex-col bg-[#32a834] gap-4">
            <a
              className="flex flex-row items-center gap-2"
              href="https://github.com/robertplawski/a-card-game"
            >
              <h1 className="text-2xl">{name}</h1>
              <SquareArrowOutUpRight size={20} />
            </a>
            <p className="text-lg">{desc}</p>
          </div>
          <div className="h-1/6 w-full text-xl font-bold rounded-b-3xl bg-[#32a834] rounded-b-xl flex items-center gap-3 justify-start pl-4">
            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4">
              <SiSocketdotio /> Socket io
            </p>
            <p className="px-8 py-3 rounded-2xl bg-[#297d2b] flex items-center justify-center gap-4">
              <FaReact /> React
            </p>
          </div>
        </div>
      </CarouselItem>
    </>
  );
};
export default CarouselSlot;
