import {
  Tailwind,
  Section,
  Row,
  Column,
  Img,
  Text,
  Link,
} from "@react-email/components";
export default function Footer() {
  return (
    <Tailwind>
      <Section className="font-sans  p-4">
        <Row>
          <Column colSpan={4}>
            <Img
              alt="Eksabajt logo"
              height="42"
              src="https://dev.eksabajt.pl/logo.webp"
            />
            <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
              Eksabajt.pl Sp. z o.o.
            </Text>
            <Text className="mb-[0px] mt-[4px] text-[16px] leading-[24px] text-gray-500">
              Zbudujemy twoją stronę
              <br />
              od podstaw
            </Text>
          </Column>
          <Column align="left" className="table-cell align-bottom">
            <Row className="table-cell h-[44px] w-[56px] align-bottom">
              <Column className="pr-[8px]">
                <Link href="#">
                  <Img
                    alt="Github"
                    height="36"
                    src="https://dev.eksabajt.pl/github.png"
                    width="36"
                  />
                </Link>
              </Column>
            </Row>
            <Row>
              <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-500">
                Ul. Sobótki 16, Opole 45-838
              </Text>
              <Text className="mb-[0px] mt-[4px] text-[16px] font-semibold leading-[24px] text-gray-500">
                kontakt@eksabajt.pl +48 ### ### ###
              </Text>
            </Row>
          </Column>
        </Row>
      </Section>
    </Tailwind>
  );
}
