import { Body, Head, Html, Section, Tailwind } from "@react-email/components";
import Footer from "./Footer";
import Header from "./Header";

export default function UserContacted({
  name = "Robert",
  email = "robertplawski8@gmail.com",
  message = "Lorem ipsum dolor sit amet",
  topic = "inny",
}: {
  name: string;
  email: string;
  message: string;
  topic: string;
}) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans ">
          <Section className=" max-w-xl">
            <Section className="bg-white rounded-lg">
              <Header />
              <Section className="p-4 ">
                <p className="text-xl font-bold">Kontakt</p>
                <p className="font-normal">
                  Użytkownik zgłosił się z następującym zapytaniem poprzez
                  formularz kontaktowy na stronie.
                </p>
                <p className="text-xl font-bold">Dane z formularza</p>
                <p className="-my-2">
                  imię: {name}, email: {email}, temat: {topic}
                </p>
                <p>Wiadomość: &quot;{message}&quot;</p>
              </Section>
            </Section>
            <p className="text-neutral-700 p-4 pb-0">
              Coś jest nie tak? Wyślij formularz jeszcze raz na{" "}
              <a href="https://eksabajt.pl/#contact">eksabajt.pl</a> lub napisz
              do nas{" "}
              <a href="mailto:kontakt@eksabajt.pl">kontakt@eksabajt.pl</a>
            </p>
            <Footer />
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
