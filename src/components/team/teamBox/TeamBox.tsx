import TextGradient from "@/components/text/TextGradient";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
interface TeamBoxProps {
  text: string;
  desc: string;
}

export default function TeamBox({ text, desc }: TeamBoxProps) {
  return (
    <>
      <div className="w-64 p-4 hover:scale-110 duration-200">
        <Card>
          <CardHeader>
            <CardTitle>
                <TextGradient>
                    {text}
                </TextGradient>
            </CardTitle>
            <CardDescription>{desc}</CardDescription>
            <CardContent>
                {/* tu bendom zdjecia :D */}
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
