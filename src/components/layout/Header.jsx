"use client";
const { AppBar, Container, Toolbar, Typography, Button, Box, alpha } = require("@mui/material");
import { theme } from "@/mui/theme.js";

const Header = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{
        boxShadow:0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "1rem",
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
            backdropFilter: "blur(24px)",
            border: "1px solid",
            borderColor: alpha("#d7d7e8", 0.5)
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