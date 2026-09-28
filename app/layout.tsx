import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const atypDisplay = localFont({
  src: [
    {
      path: "./fonts/AtypDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplay-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/AtypDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplay-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/AtypDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/AtypDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/AtypDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplay-SemiboldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/AtypDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/AtypDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-atyp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thoriq Khoir — Web Developer",
  description:
    "Portfolio of Thoriq Khoir — a web developer from Indonesia building modern, functional, and detail-focused digital experiences.",
  openGraph: {
    title: "Thoriq Khoir — Web Developer",
    description:
      "Web developer from Indonesia building modern, functional, and detail-focused digital experiences.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={atypDisplay.variable}>
      <body>{children}</body>
    </html>
  );
}
