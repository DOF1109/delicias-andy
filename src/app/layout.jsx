import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../mui/theme";
import { CssBaseline } from "@mui/material";
import "./globals.css";

export const metadata = {
  title: "Delicias Andy",
  description: "Repostería Delicias Andy | De Andrea Ochoa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
