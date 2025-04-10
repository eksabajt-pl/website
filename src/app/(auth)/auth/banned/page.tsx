import { Button } from "@/components/ui/button";
import { HeartCrack, HomeIcon } from "lucide-react";
import Link from "next/link";

export default function BannedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2 p-8 text-center">
      <HeartCrack size={64} />
      <h1 className="text-4xl font-bold">Twoje konto zostało zablokowane</h1>
      <p className="mt-4 text-lg flex flex-col items-center gap-4">
        Jeżeli uważasz, że to pomyłka - skontaktuj się z nami
        <a href="mailto:kontakt@eksabajt.pl" className="font-xl font-bold">
          kontakt@eksabajt.pl
        </a>
        <Button className="flex flex-row gap-2">
          <HomeIcon />
          <Link href="/">Powrót na stronę główną</Link>
        </Button>
      </p>
    </div>
  );
}
