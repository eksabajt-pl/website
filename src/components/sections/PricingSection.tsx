"use client";
import { Award } from "lucide-react";
import { Building } from "lucide-react";
import { Atom } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { PricingCard, PricingCardType } from "../cards/PricingCard";
import SectionHeading from "../text/SectionHeading";

const cardValues: PricingCardType[] = [
  {
    tier: "cheap",
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
    tier: "landing",
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
    tier: "startup",
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
    tier: "professional",
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

export default function PricingSection() {
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
      <p className="text-base m-5 text-muted-foreground flex justify-center text-center">
        Ceny podane to ceny startowe, ostateczna cena zależy od zakresu,
        złożoności projektu.
      </p>
    </div>
  );
}
