"use client";
const { Box, Typography, Button, Grid2 } = require("@mui/material");

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
        <Typography component="h1" variant="h4" fontWeight={500}>
          Bienvenido a Delicias Andy
        </Typography>
        <Typography variant="body2" mt={2} mb={5}>
          Descubre nuestras tortas y repostería, hechas con amor y los mejores
          ingredientes.
        </Typography>
        <Button variant="contained" color="secondary">
          Conócenos
        </Button>
        <Grid2 container spacing={2} mt={5} mb={5}>
          <Grid2>
            <Typography>100%</Typography>
            <Typography>Satisfacción garantizada</Typography>
          </Grid2>
          <Grid2>
            <Typography>+50</Typography>
            <Typography>Variedades de tortas</Typography>
          </Grid2>
          <Grid2>
            <Typography>+10</Typography>
            <Typography>Años de experiencia</Typography>
          </Grid2>
        </Grid2>
      </Box>
      <Box>Image</Box>
    </Box>
  );
};

export default Banner;
