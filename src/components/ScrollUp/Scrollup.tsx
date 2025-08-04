"use client";
import React, { useEffect, useState } from "react";
import Icon from "../Icon/Icon";

const Scrollup = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showScroll) return null;

  return (
    <div className="fixed right-10 bottom-10 z-10">
      <div className="relative group">
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 fill-beige group-hover:animate-spin-forever"
        >
          <polygon points="500,250 473.216,279.409 491.536,314.718 458.049,336.172 466.532,375.03 428.619,387.055 426.778,426.778 387.044,428.619 375.02,466.543 336.161,458.049 314.707,491.547 279.409,473.226 250,500 220.581,473.226 185.282,491.547 163.818,458.049 124.959,466.543 112.945,428.619 73.222,426.778 71.371,387.044 33.458,375.021 41.941,336.172 8.453,314.718 26.774,279.409 0,250 26.774,220.591 8.453,185.282 41.941,163.829 33.458,124.97 71.371,112.956 73.222,73.222 112.956,71.381 124.97,33.468 163.829,41.952 185.282,8.463 220.581,26.784 250,0 279.409,26.784 314.718,8.463 336.172,41.962 375.03,33.468 387.044,71.381 426.778,73.232 428.619,112.966 466.532,124.98 458.049,163.839 491.536,185.282 473.216,220.591" />
        </svg>
        <a href="#home">
          <div className="absolute top-[16px] left-[16px]">
            <Icon icon="upArrow" size={26} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Scrollup;
