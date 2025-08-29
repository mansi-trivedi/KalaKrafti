import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import Icon from "../Icon/Icon";
import { CartAPIProps } from "types/cart";
import { fetchProductImages } from "@/app/utils/imageUtils";
import { useCartContext } from "@/app/contexts/CartContext";

type CartItemPropsTypes = {
  cartItem: CartAPIProps["cartItem"];
};

const CartItem: React.FC<CartItemPropsTypes> = (props) => {
  const { cartItem } = props;
  const {
    name,
    description,
    quantity,
    productId,
    price,
    cartItemId,
    images,
    SKU,
  } = cartItem ?? {};
  const [itemQuantity, setItemQuantity] = useState<number>(quantity);

  const productImage = useMemo(() => {
    if (!images) {
      return [];
    }
    return fetchProductImages(images);
  }, [images]);

  const { removeFromCart } = useCartContext();

  const handleRemoveCartItem = useCallback(async () => {
    await removeFromCart(cartItemId);
  }, [cartItemId, removeFromCart]);

  return (
    <div className="px-2 bg-white2 rounded-xl relative p-2">
      <div className="grid lg:grid-cols-[40%_55%] xl:grid-cols-[40%_55%] 2xl:grid-cols-[40%_55%] 3xl:grid-cols-[40%_55%]p-2 items-center">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row">
          <div className="w-20 h-20 relative m-2">
            {productImage[0] && (
              <Image
                src={productImage[0]}
                className="rounded-lg object-cover"
                alt="Product Image"
                fill
              />
            )}
          </div>
          <div className="product-information px-2 my-2">
            <Link
              href={{
                pathname: `/product/${SKU}`,
              }}
            >
              <p className="font-semibold text-brick tracking-wider cursor-pointer">
                {name}
              </p>
            </Link>
            <p className="mx-0 mt-1 mb-0 text-sm tracking-wider font-light">
              {description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[35%_32%_35%] py-2">
          <div className=" pl-2 ">
            <p className="font-light tracking-wider">
              Rs. {Number(price).toFixed(2)}
            </p>
          </div>

          <div className="flex justify-center">
            <Quantity
              quantity={quantity}
              productId={productId}
              itemQuantity={itemQuantity}
              setItemQuantity={setItemQuantity}
            />
          </div>

          <div className="text-end mr-4">
            <p className="font-light tracking-wider">
              Rs. {(Number(price) * itemQuantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-16 right-3">
        <Button
          type="button"
          className="text-darkGreen"
          onClick={handleRemoveCartItem}
        >
          <Icon icon="trash" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
