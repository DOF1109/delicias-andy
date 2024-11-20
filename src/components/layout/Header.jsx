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
  Divider,
} = require("@mui/material");
import AppleIcon from "@mui/icons-material/Apple";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = useState(false);

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
            borderColor: alpha(theme.palette.grey[300], 0.5),
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
            boxShadow: theme.customShadow,
            padding: ".5rem 1rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", px: 0 }}>
            <AppleIcon />

            {/* Desktop */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                ml: 1,
              }}
            >
              <Link href="/" className="custom-link">
                <Typography color={theme.dark} sx={{ fontSize: 14 }}>
                  INICIO
                </Typography>
              </Link>
              <Link href="/services" className="custom-link">
                <Typography color={theme.dark} sx={{ fontSize: 14 }}>
                  SERVICIOS
                </Typography>
              </Link>
              <Link href="/contact" className="custom-link">
                <Typography color={theme.dark} sx={{ fontSize: 14 }}>
                  CONTACTO
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <Button variant="contained" color="secondary">
              Haz tu pedido
            </Button>
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
                <MenuItem>INICIO</MenuItem>
                <MenuItem>SERVICIOS</MenuItem>
                <MenuItem>CONTACTO</MenuItem>
                <Divider />
                <MenuItem>
                  <Button variant="contained" color="secondary" fullWidth>
                    Haz tu pedido
                  </Button>
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

/*
Guide

https://github.com/mui/material-ui/blob/v6.1.6/docs/data/material/getting-started/templates/marketing-page/components/AppAppBar.js

https://github.com/mui/material-ui/blob/v6.1.6/docs/data/material/getting-started/templates/shared-theme/themePrimitives.js

https://mui.com/material-ui/getting-started/templates/marketing-page/

*/
