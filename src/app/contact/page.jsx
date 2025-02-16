import { Container } from "@mui/material";

const { default: ContactBanner } = require("@/components/layout/ContactBanner");

const Contact = () => {
  return (
    <Container>
      <ContactBanner />
    </Container>
  );
};

export default Contact;
