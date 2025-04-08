import { Tailwind, Section, Row, Column, Img } from "@react-email/components";
export default function Header() {
  return (
    <Tailwind>
      <Section className="font-sans rounded-t-lg p-2 bg-green-400">
        <Row>
          <Column align="center" className="font-bold">
            <Img
              alt="Eksabajt logo"
              height="42"
              src="https://dev.eksabajt.pl/logo.webp"
            />
          </Column>
        </Row>
      </Section>
    </Tailwind>
  );
}
