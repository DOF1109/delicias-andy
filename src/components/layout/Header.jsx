"use client";
const {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  alpha,
  useTheme,
  IconButton,
  MenuItem,
  Drawer,
  useMediaQuery,
} = require("@mui/material");
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/../public/assets/images/logo-delicias-andy.webp";

const Header = () => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const whatsappLink =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER_LINK +
    "?text=Hola,%20quisiera%20hacer%20un%20pedido";

  const openDrawer = (newOpen) => {
    setOpenMenu(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
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
            borderColor: alpha(theme.palette.grey[300], 0.9),
            backgroundColor: alpha(theme.palette.primary.main, 0.65),
            boxShadow: theme.customShadow,
            padding: ".25rem 1rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", px: 0 }}>
            <Box
              display="block"
              width={isMobile ? 40 : 50}
              height={isMobile ? 40 : 50}
              m={1}
            >
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo Delicias Andy"
                  width={isMobile ? 40 : 50}
                  height={isMobile ? 40 : 50}
                />
              </Link>
            </Box>

            {/* Desktop */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                ml: 1,
              }}
            >
              <Link href="/" className="custom-link">
                <Typography
                  color={theme.light}
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                >
                  Inicio
                </Typography>
              </Link>
              <Link href="/services" className="custom-link">
                <Typography
                  color={theme.light}
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                >
                  Servicios
                </Typography>
              </Link>
              <Link href="/contact" className="custom-link">
                <Typography
                  color={theme.light}
                  variant="h6"
                  fontSize={16}
                  fontWeight={600}
                >
                  Contacto
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <Link href={whatsappLink} target="_blank">
              <Button variant="contained" color="secondary">
                Haz tu pedido
              </Button>
            </Link>
          </Box>

          {/* Mobile */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
            <IconButton
              aria-label="Abrir menú"
              onClick={() => openDrawer(true)}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={openMenu}
              onClose={() => openDrawer(false)}
            >
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <IconButton
                    aria-label="Cerrar menú"
                    onClick={() => openDrawer(false)}
                  >
                    <HighlightOffRoundedIcon />
                  </IconButton>
                </Box>
                <Link href="/" className="blank-link">
                  <MenuItem
                    sx={{ color: theme.dark, fontWeight: 600 }}
                    onClick={() => openDrawer(false)}
                  >
                    Inicio
                  </MenuItem>
                </Link>
                <Link href="/services" className="blank-link">
                  <MenuItem
                    sx={{ color: theme.dark, fontWeight: 600 }}
                    onClick={() => openDrawer(false)}
                  >
                    Servicios
                  </MenuItem>
                </Link>
                <Link href="/contact" className="blank-link">
                  <MenuItem
                    sx={{ color: theme.dark, fontWeight: 600 }}
                    onClick={() => openDrawer(false)}
                  >
                    Contacto
                  </MenuItem>
                </Link>
                <MenuItem>
                  <Link
                    href={whatsappLink}
                    className="full-width"
                    onClick={() => openDrawer(false)}
                    target="_blank"
                  >
                    <Button variant="contained" color="secondary" fullWidth>
                      Haz tu pedido
                    </Button>
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
