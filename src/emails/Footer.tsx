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
              src="https://react.email/static/logo-without-background.png"
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
                    alt="Facebook"
                    height="36"
                    src="https://react.email/static/facebook-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column className="pr-[8px]">
                <Link href="#">
                  <Img
                    alt="X"
                    height="36"
                    src="https://react.email/static/x-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column>
                <Link href="#">
                  <Img
                    alt="Instagram"
                    height="36"
                    src="https://react.email/static/instagram-logo.png"
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
