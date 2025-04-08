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
              src="https://react.email/static/logo-without-background.png"
            />
          </Column>
        </Row>
      </Section>
    </Tailwind>
  );
}
