import ContactMap from "@/components/layout/ContactMap";
import { Container } from "@mui/material";

const { default: ContactBanner } = require("@/components/layout/ContactBanner");

const Contact = () => {
  return (
    <Container>
      <ContactBanner />
      <ContactMap />
    </Container>
  );
};

export default Contact;
