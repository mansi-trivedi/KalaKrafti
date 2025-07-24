"use client";
import Image from "next/image";
import { shopCategories } from "@/constants/shopCategories";

export default function Shop() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full">
      {shopCategories.map(({ title, image, bgColor, textColor }, index) => (
        <div key={index} className="relative h-[300px] overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`zig-zag-box flex items-center justify-center ${bgColor} ${textColor} text-lg font-semibold tracking-widest z-10 relative`}
            >
              {title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
