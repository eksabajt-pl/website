import { CheckIcon, Mail} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { ReactElement } from "react";

interface PricingCardProps{
    icon:ReactElement;
    tier:string;
    price?:number;
    description?:string;
    best?:boolean;
}

export default function PricingCard({icon, tier, best=false, price, description = "Lorem ipsum"}: PricingCardProps){
    return <Card className={twMerge("relative flex min-w-2xs flex-col px-4 gap-2", (best) && "border-neutral-200 scale-[1.05]")}>
        {best && <div className="absolute -top-6 left-0 flex flex-col justify-center items-center w-full"><span className="p-2 bg-background border-1 border-white rounded-lg">Najczęściej wybierane</span></div>}
        <CardHeader className="flex flex-col justify-center items-center text-2xl text-center gap-4">
            <div className="scale-[2] my-8">
                {icon}
            </div>
            <CardTitle>
                {tier}
            </CardTitle>
            <span className="font-bold">{price} PLN*</span>
        </CardHeader>
        <CardDescription className="text-center">
            {description}
        </CardDescription>
        <hr/>
        <CardContent className="my-2">
            <ul>
                <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">Lorem ipsum</span>
                </li>
                <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">Lorem ipsum</span>
                </li>
                <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">Lorem ipsum</span>
                </li>

          

            </ul>
        </CardContent>
        <CardFooter className="justify-center w-full mt-2">
            <Button className="cursor-pointer w-full">
                <Mail/>
                <p>Zamów już dziś!</p>
            </Button>
        </CardFooter>
    </Card>
}