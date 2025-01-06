"use client";
const { Box, Typography, Button, Grid2, useTheme } = require("@mui/material");

const Banner = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "primary.main",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        p: 4,
        borderTopLeftRadius: "25px",
        borderBottomRightRadius: "25px"
      }}
    >
      <Box sx={{ flexGrow:{md: 2}, flexBasis: {md: "66.6%"}}}>
        <Typography variant="h4" fontWeight={600}>
          Bienvenido a
        </Typography>
        <Typography component="h1" variant="h4" fontWeight={600}>
          Delicias Andy
        </Typography>
        <Typography mt={2} mb={5} color={theme.dark}>
          Descubre nuestras tortas y repostería, hechas con amor y los mejores
          ingredientes.
        </Typography>
        <Button variant="contained" color="secondary" sx={{mt: {md: 5}}}>
          Conócenos
        </Button>
        <Grid2 container spacing={2} mt={2} flexDirection={{xs: "column", md: "row"}} color={theme.dark}>
          <Grid2>
            <Typography variant="h6" fontWeight={600}>100%</Typography>
            <Typography variant="body2">Satisfacción garantizada</Typography>
          </Grid2>
          <Grid2>
            <Typography variant="h6" fontWeight={600}>+50</Typography>
            <Typography variant="body2">Variedades de tortas</Typography>
          </Grid2>
          <Grid2>
            <Typography variant="h6" fontWeight={600}>+10</Typography>
            <Typography variant="body2">Años de experiencia</Typography>
          </Grid2>
        </Grid2>
      </Box>
      <Box sx={{ flexGrow: {md: 1}, flexBasis: {md: "33.3%"}}}>Image</Box>
    </Box>
  );
};

export default Banner;
