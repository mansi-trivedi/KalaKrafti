import Image from "next/image";
import React from "react";
import { ProductType } from "types/product";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Product: React.FC<ProductType> = (data) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[200px] w-[200px]">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
        <div className="transition-all duration-500 absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100">
          <Button className="text-white2 font-xl w-[75%] py-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]">
            VIEW MORE
          </Button>
          <Button className="absolute top-0 right-0">
            <Icon icon="heart" className="hover:fill-brick" />
          </Button>
        </div>
      </div>
      <h2 className="text-xl font-semibold tracking-widest text-brick uppercase mt-3">
        {data.name}
      </h2>
      <p className="text-sm my-2 font-light">{data.category}</p>
      <p className="text-brick font-semibold">{data.price}</p>
    </div>
  );
};

export default Product;
