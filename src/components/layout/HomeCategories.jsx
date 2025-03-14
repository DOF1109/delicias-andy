"use client";

import { Box, Grid2, Typography, useTheme } from "@mui/material";
import CustomCard from "../common/CustomCard";
import categoryOne from "@/../public/assets/images/cake1.webp";
import categoryTwo from "@/../public/assets/images/cake6.webp";
import categoryThree from "@/../public/assets/images/cake7.webp";
import categoryFour from "@/../public/assets/images/cake9.webp";

const HomeCategories = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={7}
      pb={7}
    >
      <Typography
        component="h2"
        color={theme.palette.secondary.light}
        variant="h5"
        fontWeight={600}
      >
        Nuestras categorías
      </Typography>
      <Typography mt={2} mb={5} mx={2} textAlign="center">
        Encuentra el dulce perfecto para cada ocasión
      </Typography>
      <Grid2
        container
        spacing={5}
        alignItems="center"
        justifyContent="center"
        width="100%"
        px={{ sm: 4 }}
      >
        <Grid2 size={{ xs: 10, sm: 6, md: 3 }}>
          <CustomCard img={categoryOne} title="Tortas Clásicas" />
        </Grid2>
        <Grid2 size={{ xs: 10, sm: 6, md: 3 }}>
          <CustomCard img={categoryTwo} title="Repostería Fina" />
        </Grid2>
        <Grid2 size={{ xs: 10, sm: 6, md: 3 }}>
          <CustomCard img={categoryThree} title="Masas Dulces" />
        </Grid2>
        <Grid2 size={{ xs: 10, sm: 6, md: 3 }}>
          <CustomCard img={categoryFour} title="Personalizadas" />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default HomeCategories;
