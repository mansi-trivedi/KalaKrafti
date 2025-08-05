import React from "react";
import { menuItems } from "@/constants/menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div>
      <ul className="flex flex-col justify-center items-center gap-5 xl:gap-8 2xl:gap-11 lg:flex-row xl:flex-row 2xl:flex-row">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className={`relative text-brick uppercase hover:cursor-pointer lg:py-2 xl:py-2 2xl:py-2 3xl:py-2 font-quickSand px-1 font-semibold text-sm
                                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-br after:from-[#432d23] after:via-[#A0522D] after:to-[#DEB887] after:transition-all after:duration-500 after:ease-in-out hover:after:w-[100%] hover:font-bold ${
                                  pathname == item.href &&
                                  "font-bold after:w-[100%]"
                                }`}
              style={{
                fontWeight: pathname === item.href ? "bold" : "semibold",
              }}
            >
              <Link href={item.href} className="block">
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
