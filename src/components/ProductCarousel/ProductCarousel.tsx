"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
// import Image from "next/image";
import { products } from "@/constants/products";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Product from "../Product/Product";

//const ITEM_WIDTH = 280;

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** slides as per view */
const carouselConfig = {
  xs: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
} as const;

const breakpoints = {
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1440,
  xxl: 1920,
};

function getSlidesPerView(width: number) {
  if (width >= breakpoints.xxl) return carouselConfig.xxl;
  if (width >= breakpoints.xl) return carouselConfig.xl;
  if (width >= breakpoints.lg) return carouselConfig.lg;
  if (width >= breakpoints.md) return carouselConfig.md;
  return carouselConfig.xs;
}

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState<number>(carouselConfig.xs);

  useIsomorphicLayoutEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setWindowWidth(width);
      setSlidesPerView(getSlidesPerView(width));
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((curr) => (curr === 0 ? products.length - 1 : curr - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((curr) => (curr === products.length - 1 ? 0 : curr + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const slideWidth = windowWidth ? windowWidth / slidesPerView : 0;
  const maxIndex = Math.max(0, products.length - slidesPerView);

  return (
    <div className="relative w-full overflow-hidden">
      <style jsx>{`
        .slidesContainer {
          transform: translateX(calc(-${currentIndex} * ${slideWidth}px));
          will-change: transform;
        }
        .slide {
          width: ${slideWidth}px;
        }
      `}</style>
      <Button
        disabled={currentIndex === 0}
        onClick={handlePrev}
        className="absolute top-40 left-4 z-10 text-white2 hover:cursor-pointer transition-all duration-300 bg-brick p-2 lg:p-3 rounded-full"
      >
        <Icon icon="leftArrow" className="stroke-white2" />
      </Button>
      <Button
        disabled={currentIndex >= maxIndex}
        onClick={handleNext}
        className="absolute top-40 right-4 text-white2 transition-all duration-300 bg-brick p-2 lg:p-3 z-10 rounded-full hover:cursor-pointer"
      >
        <Icon icon="rightArrow" className="stroke-white2" />
      </Button>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out slidesContainer">
          {products.map((product, index) => (
            <div key={index} className={`group flex-shrink-0 py-4 slide`}>
              {/* <div className="flex flex-col items-center">
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
              </div> */}
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
