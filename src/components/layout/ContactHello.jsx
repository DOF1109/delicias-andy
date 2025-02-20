"use client";

import Link from "next/link";

const { Box, Grid2, Typography, useTheme } = require("@mui/material");

const ContactHello = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      component="section"
      px={4}
      py={6}
      spacing={4}
      sx={{
        background:
          "linear-gradient(rgba(153,2,68,1) 40%, rgba(255,93,140,1) 100%)",
        color: theme.light,
      }}
    >
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Typography variant="h5" fontWeight={600}>
            !Hola desde Delicias Andy!
          </Typography>
          <Typography>
            Lunes a Viernes de 08:00 a 19:00 hs.
            <br />
            Estamos listos para ayudarte con tus pedidos.
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6">Envíanos un mensaje o llámanos</Typography>
          <Link href="tel:3873556647" className="blank-link">
            <Typography>3873556647</Typography>
          </Link>
          <Typography variant="h6" mt={4}>
            Síguenos en nuestras redes
          </Typography>
          <Link href="#" className="blank-link">
            <Typography>Facebook</Typography>
          </Link>
          <Link href="#" className="blank-link">
            <Typography>Instagram</Typography>
          </Link>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ContactHello;
