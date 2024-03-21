import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { queryContactEmail } from "../utils/data";



const ma = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase",
  textAlign: "center",
};

const secondary = {
  color: "#000",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center",
  margin: "0 auto",
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center",
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center",
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center",
  textTransform: "uppercase",
};


export const EmailTemplate = ({formData, amount, ticketId}) => (
  <Html>
    <Head />
    <Body style={ma}>
      <Container style={container}>
        <Img
          src={"https://i.ibb.co/0FH6XMb/ascendio-6-0.png"}
          width="160"
          alt="Ascendio Logo"
          style={logo}
        />
      <Text style={tertiary}>Confirmation: ₹{amount} Successfully Processed</Text>
        <p style={secondary}>Your ticket has been booked!</p>
        <Section style={codeContainer}>
          <Text style={code}>{ticketId}</Text>
        </Section>
        <Text style={paragraph}>Thank you for choosing our event.</Text>
        <Text style={paragraph}>
          If you have any questions or need further assistance, feel free to
          contact us at {" "}
          <Link href={`mailto:${queryContactEmail}`} style={link}>
            { queryContactEmail}
          </Link>
        </Text>
      </Container>
      <Text style={footer}>Ascendio Team.</Text>
    </Body>
  </Html>
);
