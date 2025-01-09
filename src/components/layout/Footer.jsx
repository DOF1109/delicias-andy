"use client"
import { Box, Container, Typography, useTheme } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link"

const Footer = () => {
  const theme = useTheme()

  return (
    <Box component="footer" sx={{ backgroundColor: theme.black }}>
      <Container 
        sx={{ 
          color: theme.palette.primary.main,
          display: "flex",
          alignItems: "center",
          flexDirection: {xs: "column", sm: "row"},
          gap: 2,
          justifyContent: {xs: "center", sm: "space-between"},
          py: 4, 
        }}
      >
        <Box display="flex" gap={3}>
          <Link href="/">
            <WhatsAppIcon color="primary" sx={{ height: "100%" }}/>
          </Link>
          <Link href="/">
            <FacebookIcon color="primary" sx={{ height: "100%" }}/>
          </Link>
          <Link href="/">
            <InstagramIcon color="primary" sx={{ height: "100%" }}/>
          </Link>
        </Box>
        <Typography variant="caption" textAlign="center">
          © Delicias Andy 2025. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer