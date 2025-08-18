import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import SocialMedia from "../SocialMedia/SocialMedia";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const ProductDetails = () => {
  return (
    <div className="bg-white p-14">
      <div className="flex flex-row">
        <div className="w-full">
          <ImageCarousel />
        </div>
        <div className="w-full px-10">
          <h1 className="text-brick tracking-widest text-4xl font-semibold py-4">
            ORGANIC RAW
          </h1>
          <h4 className="text-brick tracking-wider text-xl font-semibold py-4 italic">
            $11.09
          </h4>
          <p className="font-light text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor se incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostruda exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute ire dolor in
            reprehenderit in olupt ate velit esse cillum. dolore eu fugiat nulla
            pariatur.
          </p>
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
              <p className="font-light mx-2">Organic Food</p>
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
      <div className="py-10">
        <AdditionalInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
