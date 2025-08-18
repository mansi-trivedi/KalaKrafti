"use client";
import { useState } from "react";
import Image from "next/image";
import { products } from "@/constants/products";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const IMAGES_PER_PAGE = 5;

export default function ImageCarousel() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [imagesStartIndex, setImagesStartIndex] = useState<number>(0);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);

      if (newIndex < imagesStartIndex) {
        setImagesStartIndex(imagesStartIndex - 1);
      }
    }
  };

  const handleNext = () => {
    if (selectedIndex < products.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);

      if (newIndex >= imagesStartIndex + IMAGES_PER_PAGE) {
        setImagesStartIndex(imagesStartIndex + 1);
      }
    }
  };

  const handleImagesClick = (index: number) => {
    setSelectedIndex(index);

    if (index < imagesStartIndex) {
      setImagesStartIndex(index);
    } else if (index >= imagesStartIndex + IMAGES_PER_PAGE) {
      setImagesStartIndex(index - IMAGES_PER_PAGE + 1);
    }
  };

  const visibleImages = products.slice(
    imagesStartIndex,
    imagesStartIndex + IMAGES_PER_PAGE
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Selected Image */}
      <div className="w-full h-[100vh] relative overflow-hidden border border-brick mb-4">
        <Image
          src={products[selectedIndex].image}
          alt={`Image ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex justify-center items-center mb-6">
        <Button
          onClick={handlePrev}
          disabled={selectedIndex === 0}
          className="bg-white px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          <Icon icon="leftArrow" />
        </Button>
        <div className="flex justify-center flex-wrap mx-1">
          {visibleImages.map((product, index) => {
            const realIndex = imagesStartIndex + index;
            return (
              <div
                key={realIndex}
                onClick={() => handleImagesClick(realIndex)}
                className={`relative w-[74px] h-14 overflow-hidden border cursor-pointer transition ${
                  realIndex === selectedIndex
                    ? "border-brick"
                    : "border-transparent"
                } hover:border-brick`}
              >
                <Image
                  src={product.image}
                  alt={`Images ${realIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
        <Button
          onClick={handleNext}
          disabled={selectedIndex === products.length - 1}
          className="bg-white px-2 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
        >
          <Icon icon="rightArrow" />
        </Button>
      </div>
    </div>
  );
}
