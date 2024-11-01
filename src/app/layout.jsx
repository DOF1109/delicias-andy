import "./globals.css";

export const metadata = {
  title: "Delicias Andy",
  description: "Repostería Delicias Andy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
