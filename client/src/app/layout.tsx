import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const drukWideCyr = localFont({
  src: "../../public/fonts/druktextwidecyr-bold.otf",
  variable: "--font-druk",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "кружково",
  description: "Агрегатор детских секций и кружков",
  icons: {
    icon: "/brand-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${drukWideCyr.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
