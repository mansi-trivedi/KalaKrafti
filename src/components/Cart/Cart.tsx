"use client";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Button from "../Button/Button";
import { getCartItems } from "@/app/data/cart";
import { useCartContext } from "@/app/contexts/CartContext";

const Cart = () => {
  const { cartItems, setCartItemsHandler } = useCartContext();

  useEffect(() => {
    (async () => {
      const [cartResp, cartErr] = await getCartItems();
      if (cartErr) {
        return;
      }
      if (cartResp?.success) {
        setCartItemsHandler(cartResp?.data ?? []);
      }
    })();
  }, [setCartItemsHandler]);

  return (
    <div className="py-14 px-8 bg-white">
      <h1 className="text-brick text-3xl font-semibold tracking-widest pb-4">
        CART
      </h1>
      {cartItems?.length ? (
        <div className="grid relative min-h-[70vh] w-full max-w-full">
          <div className=" flex flex-col gap-3">
            {cartItems.map((cartItem, index) => {
              return <CartItem key={index} cartItem={cartItem} />;
            })}
          </div>
          <div className="sticky top-8 self-start w-full">
            <CartTotal />
            <div className="text-center">
              <Button className="w-full h-10 text-white2 font-xl uppercase tracking-wide py-2 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]">
                Pay
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl flex h-[70vh] justify-center items-center text-brick  font-semibold tracking-wider">
          Empty Cart
        </div>
      )}
    </div>
  );
};

export default Cart;
