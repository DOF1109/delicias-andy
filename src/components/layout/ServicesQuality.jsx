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

import cake from "@/../public/assets/images/cake5.webp";
import Image from "next/image";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const ServicesQuality = () => {
  const theme = useTheme();
  const imageRef = useRef(null);
  const isIntersecting = useIntersectionObserver(imageRef, { threshold: 0.1 });

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
            <Typography
              component="h2"
              color={theme.palette.secondary.light}
              fontWeight={600}
              variant="h5"
            >
              Calidad y sabor
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
            ref={imageRef}
            src={cake}
            alt="Torta de calidad"
            className="custom-shadow"
            style={{
              borderRadius: "20px",
              height: "100%",
              maxHeight: "600px",
              objectFit: "cover",
              width: "100%",
              animation: isIntersecting ? "fadeInScaleUp 1s ease-in-out" : "none",
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ServicesQuality;
