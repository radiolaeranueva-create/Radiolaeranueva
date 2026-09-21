import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Era Nueva | Agenda Setting Deportivo",
  description: "Plataforma editorial para visualizar noticias deportivas por deporte, ámbito geográfico y fuente.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
