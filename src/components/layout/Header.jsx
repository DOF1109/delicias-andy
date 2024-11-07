"use client";
const { AppBar, Container, Toolbar, Typography, Button, Box, alpha, useTheme } = require("@mui/material");
import { theme } from "@/mui/theme.js";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed" 
      sx={{
        boxShadow:0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "1.5rem",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: "0",
            borderRadius: "16px",
            backdropFilter: "blur(.25rem)",
            border: "1px solid",
            borderColor: alpha(theme.palette.grey[300], 0.5),
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
            boxShadow: theme.customShadow,
            padding: ".5rem 1rem"
          }}
        >
          <Box>
            <Typography>Delicias Andy</Typography>
            <Typography>Inicio</Typography>
            <Typography>Servicios</Typography>
            <Typography>Contacto</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="secondary">Haz tu pedido</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header