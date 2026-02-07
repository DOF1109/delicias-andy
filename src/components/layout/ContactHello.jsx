"use client";

import Link from "next/link";

const { Box, Grid2, Typography, useTheme } = require("@mui/material");

const ContactHello = () => {
  const theme = useTheme();
  const facebookLink = process.env.NEXT_PUBLIC_FACEBOOK_LINK;
  const instagramLink = process.env.NEXT_PUBLIC_INSTAGRAM_LINK;

  return (
    <Grid2
      container
      component="section"
      mb={7}
      px={4}
      py={6}
      spacing={4}
      sx={{
        background:
          "linear-gradient(rgba(32, 48, 140,1) 40%, rgba(116, 145, 255,1) 100%)",
        borderEndEndRadius: "20px",
        borderEndStartRadius: "20px",
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
            Horarios de atención
          </Typography>
          <Typography>Lunes a Viernes de 08:00 a 20:00 hs.</Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6">Envíanos un mensaje o llámanos</Typography>
          <Link href="tel:3873556647" className="blank-link" target="_blank">
            <Typography>3873556647</Typography>
          </Link>
          <Typography variant="h6" mt={4}>
            Síguenos en nuestras redes
          </Typography>
          <Link href={facebookLink} className="blank-link" target="_blank">
            <Typography>Facebook</Typography>
          </Link>
          <Link href={instagramLink} className="blank-link" target="_blank">
            <Typography>Instagram</Typography>
          </Link>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default ContactHello;
