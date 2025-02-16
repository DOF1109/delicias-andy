import { Box, Typography } from "@mui/material";

const ContactBanner = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Typography component="h2" variant="h5" fontWeight={600}>
        Contáctanos en <br />
        Delicias Andy
      </Typography>
      <Typography my={2} color="textSecondary">
        Estamos aquí para ayudarte con cualquier consulta o pedido especial.
        <br />
        ¡Visitanos o envíanos un mensaje!
      </Typography>
    </Box>
  );
};

export default ContactBanner;
