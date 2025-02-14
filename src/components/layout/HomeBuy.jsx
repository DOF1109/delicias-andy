"use client";

const { Grid2, Box, Typography, useTheme, Button } = require("@mui/material");
import AppleIcon from "@mui/icons-material/Apple";
import CakeIcon from "@mui/icons-material/Cake";
import StyleIcon from "@mui/icons-material/Style";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import cake from "@/../public/assets/images/cake3.jpg";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HomeBuy = () => {
  const theme = useTheme();

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
          <Typography variant="body2" color={theme.palette.secondary.light}>
            Delicias que te encantarán
          </Typography>
          <Typography component="h2" fontWeight={600} my={1} variant="h5">
            !Haz tu pedido hoy!
          </Typography>
          <Typography>
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
          src={cake}
          alt="Torta"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
            maxHeight: "300px",
            objectFit: "cover",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default HomeBuy;
