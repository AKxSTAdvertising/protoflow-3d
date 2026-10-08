import type { Metadata } from "next";
import "./globals.css";
import {CartProvider} from "@/components/cart-provider";

export const metadata: Metadata = {
  title: "PROTOFLOW 3D — Sculptures, Art & Devotional Forms",
  description: "A premium 3D sculpture and décor experience built around craftsmanship, form and immersive product discovery.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><CartProvider>{children}</CartProvider></body></html>;
}