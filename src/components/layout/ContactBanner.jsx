"use client";

import { Box, Typography, useTheme } from "@mui/material";

const ContactBanner = () => {
  const theme = useTheme();

  return (
    <Box component="section" sx={{ textAlign: "center", pb: 3, pt: 2 }}>
      <Typography
        component="h2"
        color={theme.palette.secondary.light}
        variant="h5"
        fontWeight={600}
      >
        Contáctanos en <br />
        Delicias Andy
      </Typography>
      <Typography m={2} color="textSecondary">
        Estamos aquí para ayudarte con cualquier consulta o pedido especial.
        <br />
        ¡Visitanos o envíanos un mensaje!
      </Typography>
    </Box>
  );
};

export default ContactBanner;
