import type { Metadata } from "next";
import { quickSand, robFont, openSans } from "@/constants/fonts";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollUp from "@/components/ScrollUp/ScrollUp";
import { Toaster } from "sonner";
import { UserProvider } from "./contexts/UserContext";
import { getUserFromToken } from "./libs/auth";
import { getAuthToken } from "./utils/getAuthToken";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";

export const metadata: Metadata = {
  title: "Kala Krafti",
  description: "this site contain different type of art pieces",
  icons: {
    icon: "/kalakrafti.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isAuthenticated = false;
  const token = await getAuthToken();
  const user = await getUserFromToken(token);
  if (user) {
    isAuthenticated = true;
  }
  return (
    <html lang="en">
      <body
        className={`${quickSand.variable} ${openSans.variable} ${robFont.variable}`}
      >
        <UserProvider
          value={{
            isAuthenticated: isAuthenticated,
          }}
        >
          <CartProvider>
            <ProductProvider>
              <Toaster
                position="bottom-right"
                // toastOptions={{
                //   style: {
                //     color: "#a55e3f",
                //     background: "#f8f8f8",
                //     fontSize: "14px",
                //     fontStyle: "italic",
                //   },
                // }}
              />
              <ScrollUp />
              <Header />
              {children}
              <Footer />{" "}
            </ProductProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
