import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface TeamBoxProps {
  text: string;
  desc: string;
  delay: number;
}

export default function TeamBox({ text, desc, delay }: TeamBoxProps) {
  return (
    <>
      <Fade direction="up" delay={delay} triggerOnce>
        <div className="w-70 p-4 hover:scale-110 duration-200">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                <TextGradient>
                  <p className="text-2xl">{text}</p>
                </TextGradient>
              </CardTitle>
              <CardDescription className="flex justify-center">
                <p className="text-md pb-2">{desc}</p>
              </CardDescription>
              <CardContent className="flex justify-center">
                {/* tu bendom zdjecia :D */}
                <img src="/profile/image.png" className="rounded-full w-40" />
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </Fade>
    </>
  );
}
