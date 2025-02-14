"use client";

import Image from "next/image";
import cake from "@/../public/assets/images/cake2.jpg";
import Link from "next/link";

const { Box, Typography, Button, Grid2, useTheme } = require("@mui/material");

const HomeBanner = () => {
  const theme = useTheme();

  return (
    <Grid2
      component="section"
      container
      spacing={6}
      sx={{
        bgcolor: "primary.main",
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
          <Typography variant="h4" fontWeight={600}>
            Bienvenido a
          </Typography>
          <Typography component="h1" variant="h4" fontWeight={600}>
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
              <Typography variant="body2">Satisfacción garantizada</Typography>
            </Grid2>
            <Grid2>
              <Typography variant="h6" fontWeight={600}>
                +50
              </Typography>
              <Typography variant="body2">Variedades de tortas</Typography>
            </Grid2>
            <Grid2>
              <Typography variant="h6" fontWeight={600}>
                +10
              </Typography>
              <Typography variant="body2">Años de experiencia</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }}>
        <Image
          src={cake}
          alt="Torta"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "300px",
            objectFit: "cover",
            borderBottomRightRadius: "50px",
            borderTopLeftRadius: "50px",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default HomeBanner;
