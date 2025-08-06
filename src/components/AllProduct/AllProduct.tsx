"use client";
import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import { products } from "@/constants/products";
import Image from "next/image";
import Pagination from "../Pagination/Pagination";
import CustomModal from "../Modal/Modal";
import { PriceType } from "types/filter";
import Icon from "../Icon/Icon";

const PRODUCTS_PER_PAGE = 6;

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceType>(null);
  const [filterModal, setFilterModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setFilterModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, price]);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);

    const priceMatch =
      !price ||
      (price.value.length === 1
        ? numericPrice >= price.value[0]
        : numericPrice >= price.value[0] && numericPrice <= price.value[1]);

    return categoryMatch && priceMatch;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const removePrice = () => setPrice(null);
  const removeCategory = (category: string) =>
    setSelectedCategories((prev) => prev.filter((b) => b !== category));
  
  const handleClearAll = () => {
    setSelectedCategories([]);
    setPrice(null);
  };
  const handleFilterModal = () => setFilterModal((prev) => !prev);

  return (
    <div className="flex py-16 bg-white flex-col lg:flex-row">
      <div
        className="px-2 lg:hidden text-brick flex-row flex"
        onClick={handleFilterModal}
      >
        <Icon icon="filter" size={26} />
        <p className="text-brick tracking-wider font-semibold px-2">FILTER</p>
      </div>

      <CustomModal
        isOpen={filterModal}
        contentStyles={{ width: "90%", position: "relative" }}
      >
        <button onClick={handleFilterModal}>
          <Icon icon="cross" className="absolute right-3" />
        </button>
        <Filter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          price={price}
          setPrice={setPrice}
        />
      </CustomModal>

      <div className="w-[27vw] shadow-md hidden lg:block">
        <Filter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          price={price}
          setPrice={setPrice}
        />
      </div>

      <div className="lg:w-[80vw] px-2 w-[100vw]">
        <div className="flex items-center p-2 space-x-2">
          {selectedCategories.map((category, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-brick rounded-full text-white text-sm font-semibold px-3 py-1"
            >
              <span>{category}</span>
              <button onClick={() => removeCategory(category)}>
                <Icon icon="crossWhite" className="ml-2" />
              </button>
            </div>
          ))}
          {price?.label && (
            <div className="flex justify-center items-center bg-brick rounded-full text-white text-sm font-semibold px-3 py-1">
              <span>{price.label}</span>
              <button onClick={removePrice}>
                <Icon icon="crossWhite" className="ml-2" />
              </button>
            </div>
          )}
          {(price?.label || selectedCategories.length > 0) && (
            <button
              onClick={handleClearAll}
              className="border-2 border-brick rounded text-sm px-3 py-1 font-semibold"
            >
              Clear All
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 border border-brick border-r-0 border-b-0">
          {paginatedProducts.map((product, index) => (
            <div
              key={index}
              className="group flex-shrink-0 border border-brick border-l-0 border-t-0"
            >
              <div className="flex flex-col items-center pb-6">
                <div className="relative h-[140px] w-[140px] m-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="transition-all duration-500 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100">
                    <button className="text-white2 font-xl w-[75%] py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]">
                      VIEW MORE
                    </button>
                  </div>
                </div>
                <h2 className="text-xl text-center font-semibold tracking-widest text-brick uppercase mt-3">
                  {product.name}
                </h2>
                <p className="text-sm my-2 font-light text-center">
                  {product.category}
                </p>
                <p className="text-brick font-semibold text-center">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default AllProduct;
