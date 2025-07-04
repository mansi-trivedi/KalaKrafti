import type { Metadata } from "next";
import { quickSand, robFont, openSans } from "@/constants/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kala Krafti",
  description: "this site contain different type of art pieces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} ${openSans.variable} ${robFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
