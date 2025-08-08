import type { Metadata } from "next";
import { quickSand, robFont, openSans } from "@/constants/fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Scrollup from "@/components/ScrollUp/ScrollUp";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Kala Krafti",
  description: "this site contain different type of art pieces",
  icons: {
    icon: "/kalakrafti.ico",
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
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              color: "#a55e3f",
              background: "#f8f8f8",
              fontSize: "14px",
              fontStyle: "italic",
            },
          }}
        />
        <Scrollup />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
