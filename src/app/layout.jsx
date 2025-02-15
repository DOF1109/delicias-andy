import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../mui/theme";
import { Box, CssBaseline } from "@mui/material";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Delicias Andy",
  description: "Repostería Delicias Andy | De Andrea Ochoa",
  keywords: "Delicias Andy, Reposteria, online",
};

const montserratAlternates = Montserrat_Alternates({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={montserratAlternates.className}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box component="main" sx={{ pt: 15, flexGrow: 1 }}>
              {children}
            </Box>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
