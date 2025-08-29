"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import { useParams, useRouter } from "next/navigation";
import { ProductType } from "types/product";
import { getProductBySku } from "@/app/data/product";
import { fetchProductImages } from "@/app/utils/imageUtils";
import { BeatLoader } from "react-spinners";
import Icon from "../Icon/Icon";
import { useCartContext } from "@/app/contexts/CartContext";
import { addToWishlist, removeItemFromWishList } from "@/app/data/wishlist";
import { useUserContext } from "@/app/contexts/UserContext";
import { useProductContext } from "@/app/contexts/ProductContext";
import { ServerResponseType } from "types/global";
import { errorToast, successToast } from "@/utils/toaster";

const ProductDetails = () => {
  const { sku } = useParams<{ sku: string }>();
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCartContext();
  const { isLoggedIn } = useUserContext();
  const { toggleProductsFromWishList, wishListProductsSkuIds } =
    useProductContext();
  const router = useRouter();
  const isItemInWishList = wishListProductsSkuIds.has(product?.SKU ?? "");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [response] = await getProductBySku(sku);
      setProduct(response?.data);
      setIsLoading(false);
    };
    fetchData();
  }, [sku]);

  const images = useMemo(() => {
    if (!product?.images) {
      return [];
    }
    return fetchProductImages(product?.images ?? "");
  }, [product?.images]);

  const handleOnAddToCart = useCallback(async () => {
    await addToCart(product?.productId ?? "", 1);
  }, [addToCart, product?.productId]);

  const handleWishList = useCallback(async () => {
    if (!isLoggedIn) {
      errorToast("Please log in to add products to your wishlist");
      router.push("/login");
      return;
    }
    toggleProductsFromWishList(product?.SKU ?? "");
    let response: ServerResponseType<"">;
    if (isItemInWishList) {
      [response] = await removeItemFromWishList(product?.productId ?? "");
    } else {
      [response] = await addToWishlist(product?.productId ?? "");
    }
    if (response?.success) {
      successToast(response?.message ?? "");
    } else {
      errorToast("Something went wrong. Please try again");
      toggleProductsFromWishList(product?.SKU ?? "");
    }
  }, [
    isLoggedIn,
    toggleProductsFromWishList,
    product?.SKU,
    isItemInWishList,
    router,
    product?.productId,
  ]);

  if (isLoading) {
    return (
      <div className="flex h-[50vh] justify-center items-center">
        <BeatLoader color="#a55e3f" loading={isLoading} size={28} />
      </div>
    );
  }

  return (
    <div className="bg-white py-14 lg:p-14 xl:p-14 2xl:p-14">
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="w-full lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
          <ImageCarousel images={images} />
        </div>
        <div className="w-full lg:w-[40%] xl:w-[40%] 2xl:w-[40%] p-8">
          <div className="flex">
            <h1 className="text-brick tracking-widest text-4xl font-bold py-4">
              {product?.name}
            </h1>
            <Button className="px-4" onClick={handleWishList}>
              <Icon
                icon="heart"
                className={`hover:fill-brick ${
                  isItemInWishList ? "fill-brick" : "fill-offWhite"
                } `}
              />
            </Button>
          </div>

          <h4 className="text-brick tracking-wider text-xl font-semibold py-4 italic">
            Rs. {product?.price}
          </h4>
          <p className="font-light text-[16px]">{product?.description}</p>
          <div className="py-6 flex">
            <Button
              className="text-white2 font-xl w-[40%] mx-8 py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
              onClick={handleOnAddToCart}
            >
              ADD TO CART
            </Button>
          </div>
          <div className="my-5 space-y-4">
            <div className="flex">
              <h2 className="tracking-widest font-bold text-brick">SKU : </h2>
              <p className="font-light mx-2">3</p>
            </div>
            <div className="flex">
              <h2 className="tracking-widest font-bold text-brick">
                CATEGORY :{" "}
              </h2>
              <p className="font-light mx-2">{product?.categoryId}</p>
            </div>
            <div className="flex">
              <h2 className="tracking-widest font-bold text-brick">TAGS : </h2>
              <p className="font-light mx-2">Homemade, Food, Craft</p>
            </div>
            <div className="flex">
              <h2 className="tracking-widest font-bold text-brick mr-2">
                SHARE :{" "}
              </h2>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4">
        <AdditionalInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
