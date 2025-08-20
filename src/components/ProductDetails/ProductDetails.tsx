"use client";
import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import SocialMedia from "../SocialMedia/SocialMedia";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import { useParams } from "next/navigation";
import { products } from "@/constants/products";

const ProductDetails = () => {
  const { sku } = useParams<{ sku: string }>();
  const selectedProduct = products.find((product) => product.sku === sku);

  return (
    <div className="bg-white py-14 lg:p-14 xl:p-14 2xl:p-14">
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="w-full lg:w-[60%] xl:w-[60%] 2xl:w-[60%]">
          <ImageCarousel />
        </div>
        <div className="w-full lg:w-[40%] xl:w-[40%] 2xl:w-[40%] p-8">
          <h1 className="text-brick tracking-widest text-4xl font-bold py-4">
            {selectedProduct?.name}
          </h1>
          <h4 className="text-brick tracking-wider text-xl font-semibold py-4 italic">
            {selectedProduct?.price}
          </h4>
          <p className="font-light text-[16px]">{selectedProduct?.category}</p>
          <div className="py-6 flex">
            <Quantity />
            <Button className="text-white2 font-xl w-[40%] mx-8 py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]">
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
              <p className="font-light mx-2">{selectedProduct?.category}</p>
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
