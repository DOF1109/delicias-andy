"use client";

import {
  Box,
  Container,
  Grid2,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import cake from "@/../public/assets/images/cake8.webp";

const ServicesBanner = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        background: alpha(theme.palette.secondary.dark, 0.75),
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src={cake}
        alt="Torta de fondo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <Container>
        <Box
          color={theme.light}
          display="flex"
          flexDirection="column"
          gap={{ xs: 6, sm: 7, md: 12 }}
          py={{ xs: 4, sm: 6, md: 12 }}
          px={4}
        >
          <Typography fontWeight={600}>
            Explora nuestra variedad de tortas, masas dulces y repostería.
            Siente el sabor y la calidez en cada bocado.
          </Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                +9
              </Typography>
              <Typography variant="body2" fontWeight={600}>Años de experiencia</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                +50
              </Typography>
              <Typography variant="body2" fontWeight={600}>Productos ofrecidos</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                +1.000
              </Typography>
              <Typography variant="body2" fontWeight={600}>Clientes satisfechos</Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
              <Typography variant="h6" fontWeight={600}>
                +450
              </Typography>
              <Typography variant="body2" fontWeight={600}>Pedidos personalizados</Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesBanner;
