"use client";

import CustomItem from "../common/CustomItem";

const {
  Grid2,
  Box,
  Typography,
  useTheme,
  Container,
} = require("@mui/material");
import CakeIcon from "@mui/icons-material/Cake";
import CookieIcon from "@mui/icons-material/Cookie";
import BrushIcon from "@mui/icons-material/Brush";

import cake from "@/../public/assets/images/cake5.jpeg";
import Image from "next/image";

const ServicesQuality = () => {
  const theme = useTheme();

  return (
    <Container component="section">
      <Grid2 container>
        <Grid2 size={{ xs: 12, md: 6 }} p={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Typography variant="body2" color={theme.palette.secondary.light}>
              Calidad y sabor
            </Typography>
            <Typography component="h2" fontWeight={600} variant="h5">
              Nuestro compromiso con la calidad
            </Typography>
            <Typography mb={3}>
              En Delicias Andy, cada producto es una obra de arte. Utilizamos
              ingredientes de la más alta calidad para crear experiencias
              inolvidables.
            </Typography>
            <CustomItem
              icon={<CakeIcon sx={{ color: theme.palette.secondary.light }} />}
              title="Tortas personalizadas"
              description="Diseña la torta perfecta para cualquier ocasión especial."
            />
            <CustomItem
              icon={
                <CookieIcon sx={{ color: theme.palette.secondary.light }} />
              }
              title="Masas dulces"
              description="Disfruta de nuestras deliciosas y variadas masas dulces."
            />
            <CustomItem
              icon={<BrushIcon sx={{ color: theme.palette.secondary.light }} />}
              title="Repostería creativa"
              description="Descubre nuestra repostería que combina creatividad y sabor."
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} p={4}>
          <Image
            src={cake}
            alt="Torta de calidad"
            style={{
              borderRadius: "20px",
              height: "100%",
              maxHeight: "600px",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ServicesQuality;
