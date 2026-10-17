import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "An-Nur Jibril Awwalul Muharram Al-Prasad | Full-Stack Developer Portfolio",
  description:
    "Portfolio of An-Nur Jibril Awwalul Muharram Al-Prasad, a full-stack developer interested in business analysis and product strategy.",
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
