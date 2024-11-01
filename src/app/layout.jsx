import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

export const metadata = {
  title: "Delicias Andy",
  description: "Repostería Delicias Andy | De Andrea Ochoa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
