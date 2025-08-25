"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [navigationModal, setNavigationModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavigationModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigationModal = () => {
    setNavigationModal((prev) => !prev);
  };
  return (
    <header
      id="home"
      className="p-5 flex items-center justify-between border-gray-200 relative 
            after:content-[''] after:block after:absolute after:top-[67px] after:lg:top-[73px] after:xl:top-[73px] after:2xl:top-[73px] after:left-0 after:w-full after:h-8
              after:bg-[linear-gradient(-155deg,#f4f4f2_16px,transparent_0),linear-gradient(155deg,#f4f4f2_16px,transparent_0)]
              after:bg-left-bottom after:bg-repeat-x after:bg-[length:35px_35px] after:z-10"
    >
      <div className="container mx-auto max-w-none flex items-center flex-wrap justify-between gap-5">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-brick cursor-pointer">
          Brand Logo
        </Link>

        <div className="lg:block hidden xl:block 2xl:block 3xl:block">
          <Navigation />
        </div>

        <div className="flex space-x-4 text-brick">
          <Link
            href="/register"
            className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
          >
            <Icon icon="user" className="hover:fill-brick" />
          </Link>

          <Link
            href="/wishlist"
            className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
          >
            <Icon
              icon="heart"
              className={`hover:fill-brick ${
                pathname == "/wishlist" && "fill-brick"
              }`}
            />
          </Link>

          <Link
            href="/cart"
            className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
          >
            <Icon
              icon="cart"
              className={`hover:fill-brick ${
                pathname == "/cart" && "fill-brick"
              }`}
            />
          </Link>

          <Button type="button" onClick={handleNavigationModal}>
            <Icon
              icon="menu"
              className="cursor-pointer lg:hidden xl:hidden 2xl:hidden 3xl:hidden transition-transform duration-500 hover:rotate-y-180"
            />
          </Button>
        </div>
      </div>
      {navigationModal && (
        <div className="absolute top-18 z-10 bg-beige w-[90%] pt-8 pb-3">
          <Navigation />
        </div>
      )}
    </header>
  );
};

export default Header;
