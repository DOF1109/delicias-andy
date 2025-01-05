"use client";
const { Box, Typography, Button } = require("@mui/material");

const Banner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "primary.main",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        p: 2,
      }}
    >
      <Box>
        <Typography component="h1" variant="h5">
          Bienvenido a Delicias Andy
        </Typography>
        <Typography>
          Descubre nuestras tortas y repostería, hechas con amor y los mejores
          ingredientes.
        </Typography>
        <Button variant="contained" color="secondary">
          Conócenos
        </Button>
      </Box>
      <Box>Image</Box>
    </Box>
  );
};

export default Banner;
