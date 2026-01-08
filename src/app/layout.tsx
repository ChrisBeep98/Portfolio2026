import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vibecoding Portfolio 2026 | Soul & Tech",
  description: "Senior UX/UI Developer & Frontend Architect. Putting soul into code through storytelling and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${manrope.variable} ${jetbrains.variable}`}>
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
