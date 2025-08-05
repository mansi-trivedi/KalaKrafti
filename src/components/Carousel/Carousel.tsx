"use client";
import React, { useCallback, useEffect, useState } from "react";
import { slides } from "../../constants/introSlide";
import { CarouselProp } from "types/carousel";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const Carousel: React.FC<CarouselProp> = (props) => {
  const { autoSlide, autoSlideInterval = 3000 } = props;
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const handleSlide = useCallback((i: number) => {
    setCurr(i);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition-transform ease-out duration-700 h-[90vh]`}
        style={{ transform: `translateX(-${curr * 100}%)`, width: `100%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full flex-shrink-0 bg-cover bg-center flex flex-col justify-center items-center"
            style={{ width: `100%`, backgroundImage: `url('${slide.image}')` }}
          >
            {" "}
            {/* backgroundImage: `url('${slide.image}')` */}
            <h1
              className={`transition-all delay-500 duration-700 ease-in-out tracking-wider m-5 text-white text-center font-bold text-5xl lg:text-7xl xl:text-7xl 2xl:text-7xl 3xl:text-7xl border-amber-600 ${
                curr === index
                  ? "-translate-y-0 opacity-100"
                  : "translate-y-50 opacity-0"
              }`}
            >
              {slide.headingText}
            </h1>
            <p
              className={`transition-all delay-[600ms] duration-700 ease-in-out w-[63vw] m-3 text-center text-white2 text-lg border-amber-600 ${
                curr === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-50 opacity-0"
              }`}
            >
              {slide.paragraphText}
            </p>
            <Button
              type="button"
              className={`transition-all delay-700 duration-700 ease-in-out text-white2 font-xl my-10 px-8 py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887] ${
                curr === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-50 opacity-0"
              }`}
            >
              VIEW MORE
            </Button>
          </div>
        ))}
      </div>
      <div className="absolute top-[27vh] left-0 border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent border-l-[50px] border-l-white2">
        <Button
          type="button"
          onClick={prev}
          className="absolute -top-3 -left-9 text-brick text-xl transition-all duration-700 ease-in-out hover:-left-11"
        >
          <Icon icon="leftArrow" />
        </Button>
      </div>
      <div className="absolute top-[27vh] right-0 border-t-[50px] border-t-transparent border-b-[50px] border-b-transparent border-r-[40px] lg:border-r-[50px] xl:border-r-[50px] 2xl:border-r-[50px] 3xl:border-r-[50px] border-r-white2">
        <Button
          type="button"
          onClick={next}
          className="absolute -top-3 -right-9 text-brick text-xl transition-all duration-700 ease-in-out hover:-right-11"
        >
          <Icon icon="rightArrow" />
        </Button>
      </div>
      <div className="absolute bottom-5 lg:bottom-10 xl:bottom-10 2xl:bottom-10 right-0 left-0">
        <div className="flex items-center justify-center gap-8">
          {slides.map((s, i) => (
            <div
              key={i}
              className="cursor-pointer p-1"
              onClick={() => handleSlide(i)}
            >
              <div
                className={`origin-bottom transition-all ease-out duration-700 w-[1.8px] h-6 bg-white rounded-full ${
                  curr === i
                    ? "scale-y-150 bg-gradient-to-t from-[#5C4033] to-[#b27d38]"
                    : "bg-gradient-to-t from-[#5C4033] to-[#DEB887]"
                } hover:scale-y-150 hover:bg-gradient-to-t hover:from-[#5C4033] hover:to-[#b27d38]`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
