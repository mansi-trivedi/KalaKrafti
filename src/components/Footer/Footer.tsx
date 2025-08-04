import React from "react";
import { menuItems } from "@/constants/menuItems";
import Link from "next/link";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <footer id="contact_us" className="py-6 bg-laundryWhite h-[188px]">
      <div className="container mx-auto px-4 text-center py-8">
        <nav className="flex justify-center space-x-6 mb-4 flex-wrap">
          {menuItems.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className=" text-brick font-quickSand tracking-wider font-semibold"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-brick hover:cursor-pointer">
            <Icon icon="instagram" />
          </a>
          <a href="#" className="text-brick hover:cursor-pointer">
            <Icon icon="facebook" />
          </a>
          <a href="#" className="text-brick hover:cursor-pointer">
            <Icon icon="youTube" />
          </a>
        </div>
        <h1 className="text-brick font-bold">Kala Krafti</h1>
      </div>
      <div className="bg-brick h-8"></div>
    </footer>
  );
};

export default Footer;
