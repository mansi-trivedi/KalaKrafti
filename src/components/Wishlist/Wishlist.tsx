"use client";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { ProductAPIProps } from "types/product";
import { useProductContext } from "@/app/contexts/ProductContext";
import { getWishList } from "@/app/data/wishlist";
import { BeatLoader } from "react-spinners";
import { errorToast } from "@/utils/toaster";

const Wishlist = () => {
  const [products, setProducts] = useState<Array<ProductAPIProps["product"]>>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const { addProductToWishList, wishListProductsSkuIds } = useProductContext();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(false);
      const [response] = await getWishList();
      if (!response?.success) {
        errorToast(
          "Not able to fetch wish list items at this moment. Please try again later"
        );
        return null;
      }
      response?.data?.forEach((product) =>
        addProductToWishList(product?.SKU ?? "")
      );
      setProducts(response?.data ?? []);
      setIsLoading(false);
    }
    fetchData();
  }, [addProductToWishList]);

  if (isLoading) {
    return (
      <div className="flex h-[100vh] justify-center items-center">
        <BeatLoader color="#a55e3f" loading={isLoading} size={28} />
      </div>
    );
  }
  return (
    <div className="py-14 px-8 bg-white">
      <h1 className="text-brick text-3xl font-semibold tracking-widest pb-4">
        WISHLIST
      </h1>
      {products?.length ? (
        <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 grid-cols-2 md:grid border border-brick">
          {products.map((product, index) => (
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
      ) : (
        <div className="text-xl flex h-[70vh] justify-center items-center text-brick  font-semibold tracking-wider">
          Empty Wishlist
        </div>
      )}
    </div>
  );
};

export default Wishlist;
