"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/constants/products";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const ITEM_WIDTH = 280;

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((curr) => (curr === 0 ? products.length - 1 : curr - 1));

  const handleNext = () =>
    setCurrentIndex((curr) => (curr === products.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[100%] overflow-hidden">
      <Button
        onClick={handlePrev}
        className="absolute top-40 left-0 z-10 text-brick hover:-left-1 transition-all duration-300"
      >
        <Icon icon="leftArrow" />
      </Button>
      <Button
        onClick={handleNext}
        className="absolute top-40 right-0 text-brick hover:-right-1 transition-all duration-300"
      >
        <Icon icon="rightArrow" />
      </Button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * ITEM_WIDTH}px)`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="group flex-shrink-0 mx-5 py-4 w-[250px]"
            >
              <div className="flex flex-col items-center">
                <div className="relative h-[300px] w-[250px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="transition-all duration-500 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100">
                    <Button className="text-white2 font-xl w-[75%] py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]">
                      VIEW MORE
                    </Button>
                  </div>
                </div>
                <h2 className="text-xl font-semibold tracking-widest text-brick uppercase mt-3">
                  {product.name}
                </h2>
                <p className="text-sm my-2 font-light">{product.category}</p>
                <p className="text-brick font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
