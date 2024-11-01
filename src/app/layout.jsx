import "./globals.css";

export const metadata = {
  title: "Delicias Andy",
  description: "Repostería Delicias Andy | De Andrea Ochoa",
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
