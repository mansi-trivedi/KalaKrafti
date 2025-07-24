"use client";
import React, { useState } from "react";
import { FiHeart, FiShoppingCart, FiMenu, FiUser } from "react-icons/fi";
import Link from "next/link";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const [navigationModal, setNavigationModal] = useState(false);
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
        <div className="text-lg font-bold text-brick cursor-pointer">
          Brand Logo
        </div>

        <div className="lg:block hidden xl:block 2xl:block 3xl:block">
          <Navigation />
        </div>

        <div className="flex space-x-4 text-brick">
          <Link
            href="/login"
            className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
          >
            <FiUser size={20} className="hover:fill-brick" />
          </Link>

          <Link
            href="/wishlist"
            className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
          >
            <FiHeart size={20} className="hover:fill-brick" />
          </Link>

          <Link
            href="/cart"
            className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
          >
            <FiShoppingCart size={20} className="hover:fill-brick" />
          </Link>

          <button type="button" onClick={handleNavigationModal}>
            <FiMenu
              size={20}
              className="cursor-pointer lg:hidden xl:hidden 2xl:hidden 3xl:hidden transition-transform duration-500 hover:rotate-y-180"
            />
          </button>
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
