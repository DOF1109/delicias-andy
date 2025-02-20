"use client";

const { Box, Grid2, Typography, useTheme } = require("@mui/material");

const ContactHello = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      component="section"
      padding={4}
      spacing={4}
      sx={{
        background: `linear-gradient( ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
        color: theme.light,
      }}
    >
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography variant="h5" fontWeight={600}>
          !Hola desde Delicias Andy!
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography variant="h5">!Hola desde Delicias Andy!</Typography>
      </Grid2>
    </Grid2>
  );
};

export default ContactHello;
