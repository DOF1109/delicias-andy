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
} = require("@mui/material");
import AppleIcon from "@mui/icons-material/Apple";
import Link from "next/link";

const Header = () => {
  const theme = useTheme();

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
            <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
              <Link href="/" className="custom-link">
                <Typography color={theme.dark} sx={{fontSize:14}}>INICIO</Typography>
              </Link>
              <Link href="/services" className="custom-link">
                <Typography color={theme.dark} sx={{fontSize:14}}>SERVICIOS</Typography>
              </Link>
              <Link href="/contact" className="custom-link">
                <Typography color={theme.dark} sx={{fontSize:14}}>CONTACTO</Typography>
              </Link>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" color="secondary">
              Haz tu pedido
            </Button>
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
