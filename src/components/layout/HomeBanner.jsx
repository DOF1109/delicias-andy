"use client";

import Image from "next/image";
import cake from "@/../public/assets/images/logo-delicias-andy.webp";
import Link from "next/link";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const { Box, Typography, Button, Grid2, useTheme } = require("@mui/material");

const HomeBanner = () => {
  const theme = useTheme();
  const imageRef = useRef(null);
  const isIntersecting = useIntersectionObserver(imageRef, { threshold: 0.1 });

  return (
    <Grid2
      component="section"
      container
      spacing={6}
      sx={{
        background:
          "linear-gradient(rgba(255, 192, 203, 1) 40%, rgba(248, 59, 107, 1) 100%)",
        borderBottomRightRadius: "50px",
        borderTopLeftRadius: "50px",
        p: 4,
      }}
    >
      <Grid2
        size={{ xs: 12, md: 8 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box color={theme.dark}>
          <Typography component="h1" variant="h4" fontWeight={600}>
            Bienvenido a <br />
            Delicias Andy
          </Typography>
          <Typography mt={2} mb={5}>
            Descubre nuestras tortas y repostería, hechas con amor y los mejores
            ingredientes.
          </Typography>
        </Box>
        <Box>
          <Link href="/services">
            <Button variant="contained" color="secondary">
              Conócenos
            </Button>
          </Link>
          <Grid2
            container
            spacing={2}
            mt={2}
            flexDirection={{ xs: "column", sm: "row" }}
            color={theme.dark}
          >
            <Grid2>
              <Typography variant="h6" fontWeight={600}>
                100%
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                Satisfacción garantizada
              </Typography>
            </Grid2>
            <Grid2>
              <Typography variant="h6" fontWeight={600}>
                +30
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                Variedades de tortas
              </Typography>
            </Grid2>
            <Grid2>
              <Typography variant="h6" fontWeight={600}>
                +9
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                Años de experiencia
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }}>
        <Image
          src={cake}
          alt="Torta"
          style={{
            width: "280px",
            height: "280px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: `
              0px 4px 15px rgba(0, 0, 0, 0.4),
              0px 8px 30px rgba(0, 0, 0, 0.3),
              0px 12px 45px rgba(0, 0, 0, 0.2),
              inset 0px 0px 10px rgba(255, 255, 255, 0.5)
            `,
            animation: "fadeInScaleUp 1s ease-in-out",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default HomeBanner;
