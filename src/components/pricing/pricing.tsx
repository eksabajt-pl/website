import CustomCard from "./cards/CustomCard";
import { Award } from "lucide-react";
import { Building } from "lucide-react";
import { Atom } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { MailCheckIcon } from "../ui/mail-check";
import Li from "./cards/LiCard";
import SectionHeading from "../text/SectionHeading";
import { twMerge } from "tailwind-merge";
import Badge from "../badge/Badge";
type cards = {
  title: string;
  price: string;
  icon: React.ElementType;
  unique: boolean;
  subtitle: string;
  features: string[];
};
const cardValues = [
  {
    title: "Twój Zamysł",
    price: "Od 500 zł",
    icon: LayoutDashboard,
    unique: false,
    subtitle: "Makieta graficzna",
    features: [
      "Responsywność",
      "Optymalizacja SEO (podstawowa)",
      "Statyczna strona",
      "Szybkie wdrożenie (1-3 dni)",
      "Podstawowe Sekcje",
      "Prosta nawigacja",
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
      "Wersje językowe (opcjonalnie)",
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
      "Bezpieczeństwo i certyfikat SSL",
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
      "Obsługa e-commerce lub system rezerwacji",
    ],
  },
];
const PricingCard = ({
  title,
  price,
  icon: Icon,
  unique,
  subtitle,
  features,
}: cards) => {
  return (
    <CustomCard
      className={twMerge(
        `relative flex justify-between shadow-none border-neutral-700`,
        unique && "border-green-400"
      )}
    >
      <Icon className="absolute inset-0 text-award " size="100%" />
      {unique ? (
        <Badge className="-top-4 absolute left-[50%] -translate-x-[50%] ">
          Najczęściej wybierany
        </Badge>
      ) : null}

      {/* Górna sekcja */}
      <section className="gap-2 z-2 flex flex-col justify-around text-md sm:text-lg ">
        <h3 className="text-center font-bold   ">{title}</h3>
        <h4 className="text-center text-green-400 font-bold tracking-widest text-sm sm:text-base">
          {price}
        </h4>
        <p className="text-li text-center text-sm sm:text-base ">{subtitle}</p>
      </section>

      <div className="mx-5 my-3 relative flex items-center justify-center max-w"></div>
      <hr className="z-2 mx-5" />
      {/* Dolna sekcja */}
      <section className="z-2 px-4 py-6 flex flex-col text-sm sm:text-base">
        <ul className="font-bold space-y-2">
          {features.map((feature, index) => (
            <Li key={index}>{feature}</Li>
          ))}
        </ul>
      </section>
      <button className="z-1 text-sm flex-row font-bold p-1 flex justify-center items-center gap-2 bg-green-600 mx-4 cursor-pointer rounded-lg">
        <MailCheckIcon size={20} /> Zamów już dziś
      </button>
    </CustomCard>
  );
};
const Pricing = () => {
  return (
    <div className="max-w min-h-[100vh] flex flex-col justify-start">
      {/* Nagłówek */}
      <SectionHeading
        normal="Nasz zespół wyceni"
        emphasis="twój projekt"
        description="Bez dodatkowej opłaty nasz wykwalifikowany zespół wyceni twoją stronę/aplikację internetową"
      />

      {/* oferta */}
      <div className="p-8 items-center flex flex-row max-w min-h-[60vh] flex-wrap justify-center gap-4 ">
        {cardValues.map((option, index) => (
          <PricingCard key={index} {...option} />
        ))}
      </div>

      {/* opis poza kartą */}
      <p className="text-base font-medium m-5 text-gray-400 flex justify-center text-center">
        *Ceny mogą się wahać zależnie od poziomu złożoności strony, dlatego
        warto w tym wypadku najlepiej wypełnić poniższy formularz*
      </p>
    </div>
  );
};
export default Pricing;
