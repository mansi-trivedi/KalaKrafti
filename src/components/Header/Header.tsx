"use client";
import React, { useCallback, useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useUserContext } from "@/app/contexts/UserContext";
import { performUserLogout } from "@/app/data/user";
import { errorToast, successToast } from "@/utils/toaster";

const Header = () => {
  const pathname = usePathname();
  const { isLoggedIn, handleUserLoggedInState } = useUserContext();
  const [navigationModal, setNavigationModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNavigationModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUserLogout = useCallback(async () => {
    const [response, error] = await performUserLogout();
    if (error) {
      errorToast("Something went wrong, Please try again later");
      return;
    }
    if (response?.success) {
      handleUserLoggedInState(false);
      successToast("Successfully logout");
      router.push("/");
    }
  }, [handleUserLoggedInState, router]);

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
          {isLoggedIn ? (
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
              >
                <Icon icon="user" className="fill-brick" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md z-20">
                  <Link
                    href={"/orders"}
                    className="block w-full text-left px-4 py-2 text-sm  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 active:bg-gray-200 rounded-t-md rounded-b-md"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={handleUserLogout}
                    className="block w-full text-left px-4 py-2 text-sm  hover:bg-gray-100 focus:outline-none focus:bg-gray-100 active:bg-gray-200 rounded-t-md rounded-b-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="p-0.5 transition-transform duration-500 hover:rotate-y-180"
            >
              <Icon icon="user" className="hover:fill-brick" />
            </Link>
          )}
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
        <div className="absolute top-18 z-10 bg-white w-[30%] pt-8 pb-4 border border-gray-200 shadow-md rounded-md right-2">
          <Navigation />
        </div>
      )}
    </header>
  );
};

export default Header;
