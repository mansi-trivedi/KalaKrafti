import type { Metadata } from "next";
import { quickSand, robFont, openSans } from "@/constants/fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Scrollup from "@/components/ScrollUp/Scrollup";

export const metadata: Metadata = {
  title: "Kala Krafti",
  description: "this site contain different type of art pieces",
  icons: {
    icon: "/kalakrafti.png",
  },
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
        <Scrollup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
