import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "An-Nur Jibril Awwalul Muharram Al-Prasad | Full-Stack Developer and Product Strategy Portfolio",
  description:
    "Portfolio website for An-Nur Jibril Awwalul Muharram Al-Prasad, presenting full-stack development experience, business analysis growth, and the Kenangan Smart Pickup Time case study.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
