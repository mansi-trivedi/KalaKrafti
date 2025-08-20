import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductType } from "types/product";
import Button from "../Button/Button";
import Quantity from "../Quantity/Quantity";
import Icon from "../Icon/Icon";

type CartProps = {
  product: ProductType;
};

const CartItem: React.FC<CartProps> = ({ product }) => {
  return (
    <div className="px-2 bg-white2 rounded-xl relative p-2">
      <div className="grid lg:grid-cols-[40%_55%] xl:grid-cols-[40%_55%] 2xl:grid-cols-[40%_55%] 3xl:grid-cols-[40%_55%]p-2 items-center">
        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row">
          <div className="w-20 h-20 relative m-2">
            <Image
              src={product.image}
              className="rounded-lg"
              alt="Product Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="product-information px-2 my-2">
            <Link
              href={{
                pathname: `/product/${product.sku}`,
              }}
            >
              <p className="font-semibold text-brick tracking-wider cursor-pointer">
                {product.name}
              </p>
            </Link>
            <p className="mx-0 mt-1 mb-0 text-sm tracking-wider font-light">
              {product.category}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[35%_32%_35%] py-2">
          <div className=" pl-2 ">
            <p className="font-light tracking-wider">{product.price}</p>
          </div>

          <div className="flex justify-center">
            <Quantity />
          </div>

          <div className="text-end mr-4">
            <p className="font-light tracking-wider">{product.price}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-16 right-3">
        <Button type="button" className="text-darkGreen">
          <Icon icon="trash" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
