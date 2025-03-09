"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ backgroundColor: theme.black }}>
      <Container
        sx={{
          color: theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: { xs: "center", sm: "space-between" },
          py: 4,
        }}
      >
        <Box display="flex" gap={3}>
          <Link
            href="https://api.whatsapp.com/send?phone=%2B543873556647&context=ARDQajw7Yk9iUTWJ6H8qz2x4EwWqouwfEMQ0S8PWof241sZBIGhTGT9SgsMk1c13aH4QSKKCbLWdxzJ-iTI5jSErPulPwWrxGCOunoINZy3wVdylXNGI3PAma7yl7VOQ23BCHYXf90HS63BeU7YQCBQc1A&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawI59-NleHRuA2FlbQIxMAABHewtIY9DS2AnWc42BdB4IDVb-MYcD3lQP4qBBwlJxkpDAZwir31MoH8y6A_aem_FjJVgkr33IZfYrTHqbyAgA"
            target="_blank"
          >
            <WhatsAppIcon color="primary" sx={{ height: "100%" }} />
          </Link>
          <Link
            href="https://www.facebook.com/deliciasandy.miriamandreaochoa"
            target="_blank"
          >
            <FacebookIcon color="primary" sx={{ height: "100%" }} />
          </Link>
          <Link href="https://www.instagram.com/delicias_andy/" target="_blank">
            <InstagramIcon color="primary" sx={{ height: "100%" }} />
          </Link>
        </Box>
        <Typography variant="caption" textAlign="center">
          © Delicias Andy 2025. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
