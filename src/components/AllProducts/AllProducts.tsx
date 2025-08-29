"use client";
import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import { BeatLoader } from "react-spinners";
import Pagination from "../Pagination/Pagination";
import CustomModal from "../Modal/Modal";
import { PriceType } from "types/filter";
import Icon from "../Icon/Icon";
import Product from "../Product/Product";
import { ProductAPIProps } from "types/product";
import { getAllProduct } from "@/app/data/product";
import { useProductContext } from "@/app/contexts/ProductContext";
import { errorToast } from "@/utils/toaster";

const PRODUCTS_PER_PAGE = 6;

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState<
    Array<ProductAPIProps["product"]>
  >([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<PriceType>(null);
  const [filterModal, setFilterModal] = useState(false);
  const { wishListProductsSkuIds } = useProductContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [response] = await getAllProduct(PRODUCTS_PER_PAGE, 1);
      setTotalProducts(response?.data?.totalProducts ?? 0);
      setCurrentPage(response?.data?.currentPage ?? 1);
      setCurrentProducts(response?.data?.products ?? []);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handlePageChange = async (pageNumber: number) => {
    const [response, err] = await getAllProduct(PRODUCTS_PER_PAGE, pageNumber);
    setCurrentProducts(response?.data?.products ?? []);
    if (err) {
      errorToast("Not able to fetch products");
      return;
    }
    setCurrentPage(pageNumber);
  };

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

  if (isLoading) {
    return (
      <div className="flex h-[50vh] justify-center items-center">
        <BeatLoader color="#a55e3f" loading={isLoading} size={28} />
      </div>
    );
  }

  // const filteredProducts = products.filter(
  //   (product: { category: string; price: string }) => {
  //     const categoryMatch =
  //       selectedCategories.length === 0 ||
  //       selectedCategories.includes(product.category);

  //     const numericPrice = parseInt(product.price.replace(/[^0-9]/g, ""), 10);

  //     const priceMatch =
  //       !price ||
  //       (price.value.length === 1
  //         ? numericPrice >= price.value[0]
  //         : numericPrice >= price.value[0] && numericPrice <= price.value[1]);

  //     return categoryMatch && priceMatch;
  //   }
  // );

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

        <div className="grid lg:grid-cols-3 grid-cols-2 border border-brick">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="group flex-shrink-0 border p-5 border-brick"
            >
              <Product
                product={product}
                isItemInWishList={wishListProductsSkuIds.has(
                  product?.SKU ?? ""
                )}
              />
            </div>
          ))}
        </div>

        <Pagination
          onPageClick={handlePageChange}
          itemsPerPage={PRODUCTS_PER_PAGE}
          totalItems={totalProducts as number}
          currentPage={currentPage as number}
        />
      </div>
    </div>
  );
};

export default AllProduct;
