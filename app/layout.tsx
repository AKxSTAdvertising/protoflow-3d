import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROTOFLOW 3D — Sculptures, Art & Devotional Forms",
  description:
    "A premium 3D sculpture and décor experience built around craftsmanship, form and immersive product discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}