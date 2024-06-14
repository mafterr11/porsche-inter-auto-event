import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const EmailTemplate = ({
  name,
  email,
  phone,
  message,
  marca,
  selectedLocation,
  carCondition,
  carModel,
}: {
  name: string;
  email: string;
  phone: number;
  message: string;
  marca: string;
  selectedLocation: number;
  carCondition: string;
  carModel: string;
}) => {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://offerfest-pia.vercel.app";

  return (
    <Html>
      <Head />
      <Preview>OfferFest PIA - Solicitare nouă</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={global.defaultPadding}>
            <Img
              src={`${baseUrl}/logo.jpg`}
              width="65"
              height="73"
              alt="delivery snake"
              style={{ margin: "auto" }}
            />
            <Heading style={global.heading}>
              OfferFest PIA - Solicitare nouă
            </Heading>
            <Text style={global.text}>Nume complet: {name}</Text>
            <Text style={{ ...global.text, marginTop: 4 }}>Email: {email}</Text>
            <Text style={{ ...global.text, marginTop: 4 }}>
              Telefon: {phone}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={{ ...global.text }}>Marcă: {marca}</Text>
            <Text style={{ ...global.text, marginTop: 4 }}>
              {" "}
              Locație selectată:{" "}
              {selectedLocation === 1
                ? "Porsche Pipera"
                : "Porsche București Vest 2"}
            </Text>
            <Text style={{ ...global.text }}>
              Condiție mașină: {carCondition}
            </Text>
            <Text style={{ ...global.text }}>Model mașină: {carModel}</Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={track.number}>Mesaj: {message}</Text>
            <Text style={track.number}>
              Odată cu primirea acestui email, utilizatorul {name} declară că
              este de acord cu GDPR-ul.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const messageStyle: React.CSSProperties = {
  padding: "40px 74px",
  textAlign: "center",
};
