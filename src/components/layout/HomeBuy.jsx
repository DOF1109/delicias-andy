"use client";

const { Grid2, Box, Typography, useTheme, Button } = require("@mui/material");
import AppleIcon from "@mui/icons-material/Apple";
import CakeIcon from "@mui/icons-material/Cake";
import StyleIcon from "@mui/icons-material/Style";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import cake from "@/../public/assets/images/cake3.jpg";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const HomeBuy = () => {
  const theme = useTheme();
  const imageRef = useRef(null);
  const isIntersecting = useIntersectionObserver(imageRef, { threshold: 0.1 });

  return (
    <Grid2
      component="section"
      container
      spacing={{ xs: 3, md: 6 }}
      p={4}
      mb={4}
      alignItems="center"
    >
      <Grid2 size={{ xs: 12, md: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 4,
          }}
        >
          <Typography
            component="h2"
            color={theme.palette.secondary.light}
            fontWeight={600}
            my={1}
            variant="h5"
          >
            Descubre la mágia de nuestros sabores y sorprende a tus seres
            queridos.
          </Typography>
        </Box>
        <Grid2 container spacing={2} mb={4}>
          <Grid2 display="flex" gap={1} size={{ xs: 12, sm: 5 }}>
            <AppleIcon sx={{ color: theme.palette.secondary.light }} />
            <Typography>Ingredientes frescos</Typography>
          </Grid2>
          <Grid2 display="flex" gap={1} size={{ xs: 12, sm: 5 }}>
            <CakeIcon sx={{ color: theme.palette.secondary.light }} />
            <Typography>Diseños únicos</Typography>
          </Grid2>
          <Grid2 display="flex" gap={1} size={{ xs: 12, sm: 5 }}>
            <StyleIcon sx={{ color: theme.palette.secondary.light }} />
            <Typography>Variedad de opciones</Typography>
          </Grid2>
          <Grid2 display="flex" gap={1} size={{ xs: 12, sm: 5 }}>
            <EmojiEmotionsIcon sx={{ color: theme.palette.secondary.light }} />
            <Typography>Atención personalizada</Typography>
          </Grid2>
        </Grid2>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ShoppingCartIcon />}
        >
          Comprar
        </Button>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }} display={{ xs: "none", md: "flex" }}>
        <Image
          ref={imageRef}
          src={cake}
          alt="Torta"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
            maxHeight: "300px",
            objectFit: "cover",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
            animation: isIntersecting ? "fadeInScaleUp 1s ease-in-out" : "none",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default HomeBuy;
