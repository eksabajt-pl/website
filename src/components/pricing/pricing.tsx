import CustomCard from "./cards/CustomCard";
import Fade from "../pearls/Fade";
import { Award} from "lucide-react";
import { Building } from 'lucide-react';
import { Atom } from "lucide-react";
import { LayoutDashboard } from 'lucide-react';
import { MailCheckIcon } from "../ui/mail-check";
import TextGradient from "../text/TextGradient";
import Li from "./cards/LiCard"
import SectionHeading from "../text/SectionHeading";
type cards ={
    title:string,
    price:string,
    icon:React.ElementType,
    unique:boolean,
    subtitle:string,
    features:string[]
}
    const cardValues = [{
        title: "Twój Zamysł",
        price: "Od 500 zł",
        icon: LayoutDashboard,
        unique:false,
        subtitle: "Makieta graficzna",
        features: [
            "Responsywność",
            "Optymalizacja SEO (podstawowa)",
            "Statyczna strona",
            "Szybkie wdrożenie (1-3 dni)",
            "Podstawowe Sekcje",
            "Prosta nawigacja"
        ],
    },
    {
        title: "Landing Page",
        price: "Od 2000 zł",
        icon: Award,
        unique: true,
        subtitle: "E-wizytówka",
        features: [
            "Unikalny design",
            "Optymalizacja SEO",
            "Formularz kontaktowy / CTA",
            "Analityka (Google Analytics",
            "Szybkie ładowanie",
            "Wersje językowe (opcjonalnie)"
        ],
    },
    {
        title: "Twoja Firma",
        price: "Od 4000 zł",
        icon: Building,
        unique: false,
        subtitle: "Strona dla twojej firmy",
        features: [
            "Indywidualny projekt graficzny",
            "Optymalizacja SEO (rozszerzona)",
            "Integracja z bazą danych",
            "Integracja z social media + newsletter",
            "Moduły: blog, FAQ, cennik, usługi",
            "Bezpieczeństwo i certyfikat SSL"
        ],
    },
    {
        title: "Zaawansowany",
        price: "Od 8000 zł",
        icon: Atom,
        unique: false,
        subtitle: "Dla profesjonalistów",
        features: [
            "Zaawansowany design UI/UX",
            "Optymalizacja SEO + strategia contentowa",
            "Własny panel zarządzania treścią",
            "Wydajność + optymalizacja Core Web Vitals",
            "Wersje językowe i RODO",
            "Obsługa e-commerce lub system rezerwacji"
        ],
    }
    ]
    const PricingCard = ({title,price,icon: Icon,unique,subtitle,features}:cards)=> {
        return(
             <CustomCard className={unique ? `relative flex justify-between border-green-400` : `relative flex justify-between shadow-none  border-neutral-700`}>
                {unique ? <div className="absolute w-max top-[0px] border-1 border-green-500 left-[50%] shadow-lg shadow-green-500/40 font-bold translate-[-50%] bg-[var(--award)] p-2 rounded-xl z-5">Najczęściej wybierane</div> : null}

        <Icon className="absolute inset-0 text-[var(--award)] z-1" size="100%" />
        
        {/* Górna sekcja */}
        <section className="z-2 flex flex-col justify-around">
          <h3 className="text-center font-bold text-3xl my-4 max-xl:my-2">{title}</h3>
          <div className="text-center text-green-400 font-bold text-xl tracking-widest">
            {price}
          </div>
          <p className="text-xl my-2 text-[var(--li)] text-center max-xl:text-base">{subtitle}</p>
        </section>
        
        <div className="mx-5 my-3 relative flex items-center justify-center max-w">
      </div>        
      <hr className="z-2 mx-5"/>
        {/* Dolna sekcja */}
        <section className="z-2 px-4 py-6 flex flex-col">
          <ul className="text-sm font-bold space-y-2">
            {features.map((feature, index) => (
              <Li key={index}>{feature}</Li>
            ))}
          </ul>
        </section>
        <button className="cursor-pointer z-2 mx-8 max-w bg-linear-to-r from-green-500 transition delay-50 duration-1000 ease-in-out to-green-600 flex justify-center items-center text-white py-2 rounded-lg text-lg font-medium max-xl:text-base hover:from-green-400 hover:to-green-500 border-3 hover:border-white hover:transition hover:delay-50 hover:duration-300 hover:ease-in-out">
            <MailCheckIcon size={25} className="" /> Zamów już dziś
          </button>
      </CustomCard>
        )
    }
    const Pricing = () =>{
    return(
        <div className="max-w min-h-[100vh] flex flex-col justify-start">
    {/* Nagłówek */}
    <SectionHeading normal="Nasz zespół wyceni" emphasis="twój projekt" description="Bez dodatkowej opłaty nasz wykwalifikowany zespół wyceni twoją stronę/aplikację internetową"/>
    

    {/* oferta */}
    <div className=" flex flex-row max-w min-h-[60vh] flex-wrap justify-center gap-6">
      {cardValues.map((option, index) => (
        <PricingCard key={index} {...option} />
      ))}
    </div>

    {/* opis poza kartą */}
    <p className="text-base font-medium m-5 text-gray-400 flex justify-center text-center">
      *Ceny mogą się wahać zależnie od poziomu złożoności strony, dlatego warto w tym wypadku najlepiej wypełnić poniższy formularz*
    </p>
  </div>
);
}
export default Pricing;