import { BriefcaseBusiness, Building, House, Pencil } from "lucide-react";
import PricingCard from "../cards/PricingCard";
import SectionHeading from "../text/SectionHeading";
import Section from "./Section";

export default function PricingSection(){
    return <Section id="Pricing">
        <SectionHeading normal="Jaka jest?" emphasis="Cena naszych usług" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
            <PricingCard icon={<Pencil/>} description="Szybki design twojej strony" tier="Design" price={0}/>
            <PricingCard best={true} icon={<BriefcaseBusiness/>}  description="E-wizytówka dla ciebie" tier="Landing page" price={299}/>
            <PricingCard icon={<House/>}  description="Specjalnie dla twojej firmy" tier="Startup" price={699}/>
            <PricingCard icon={<Building/>} description="Dla profesjonalistów" tier="Professional" price={999}/>
        </div>
        <p className="text-muted-foreground mt-2">* Podane ceny to ceny startowe, w zależności od wielkości projektu mogą się zmienić.</p>
    </Section>   
}