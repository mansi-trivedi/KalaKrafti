import { products } from "@/constants/products";
import React from "react";
import Product from "../Product/Product";

const Wishlist = () => {
  return (
    <div className="py-14 px-8 bg-white">
      <h1 className="text-brick text-3xl font-semibold tracking-widest pb-4">
        WISHLIST
      </h1>
      <div className="grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 grid-cols-3 border border-brick border-r-0 border-b-0">
        {products.map((product, index) => (
          <div
            key={index}
            className="group flex-shrink-0 border p-5 border-brick border-l-0 border-t-0"
          >
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
