import { products } from "@/constants/products";
import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Button from "../Button/Button";

const Cart = () => {
  return (
    <div className="py-14 px-8 bg-white">
      <h1 className="text-brick text-3xl font-semibold tracking-widest pb-4">
        CART
      </h1>
      {products?.length ? (
        <div className="grid lg:grid-cols-[calc(70%-1rem)_calc(30%-1rem)] relative min-h-screen w-full max-w-full gap-5">
          <div className="cart-items-container flex flex-col gap-3">
            {products.map((product, index) => {
              return <CartItem key={index} product={product} />;
            })}
          </div>
          <div className="cart-summary-container sticky top-8 self-start w-full">
            <CartTotal />
            <div className="text-center">
              <Button className="w-full h-10 text-white2 font-xl uppercase tracking-wide py-2 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]">
                Pay
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl text-darkBlue text-center my-20 font-semibold">
          Empty Cart
        </div>
      )}
    </div>
  );
};

export default Cart;
