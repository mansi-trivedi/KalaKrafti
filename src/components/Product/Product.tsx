import Image from "next/image";
import React from "react";
import { ProductType } from "types/product";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Link from "next/link";

const Product: React.FC<ProductType> = (data) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="relative h-[150px] w-[150px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px] md:w[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px]">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>
      <h2 className="text-xl text-center font-semibold tracking-widest text-brick uppercase mt-3">
        {data.name}
      </h2>
      <p className="text-sm my-2 text-center font-light">{data.category}</p>
      <p className="text-brick text-center font-semibold mb-4">{data.price}</p>
      <div className="transition-all duration-500 lg:absolute lg:top-20 xl:absolute xl:top-20 2xl:absolute 2xl:top-20 opacity-100 lg:opacity-0 xl:opacity-0 2xl:opacity-0 lg:group-hover:opacity-100 xl:group-hover:opacity-100 2xl:group-hover:opacity-100">
        <Link
          className="text-white2 uppercase font-xl p-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
          href={{
            pathname: `/products/${data.sku}`,
          }}
        >
          view more
        </Link>
        <Button className="absolute -top-2 lg:-top-20 lg:-right-16">
          <Icon icon="heart" className="hover:fill-brick" />
        </Button>
      </div>
    </div>
  );
};

export default Product;
