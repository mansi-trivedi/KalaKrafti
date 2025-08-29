import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import { ProductType } from "types/product";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Link from "next/link";
import { fetchProductImages } from "@/app/utils/imageUtils";
import { useProductContext } from "@/app/contexts/ProductContext";
import { useUserContext } from "@/app/contexts/UserContext";
import { useRouter } from "next/navigation";
import { addToWishlist, removeItemFromWishList } from "@/app/data/wishlist";
import { errorToast, successToast } from "@/utils/toaster";

type ProductPropType = {
  product: ProductType;
  isItemInWishList?: boolean;
};

const Product: React.FC<ProductPropType> = (props) => {
  const { product, isItemInWishList = false } = props;
  const {
    images: image,
    price,
    name,
    description,
    SKU: sku = "",
    productId = "",
  } = product ?? {};
  const { toggleProductsFromWishList } = useProductContext();
  const { isLoggedIn } = useUserContext();
  const router = useRouter();

  console.log("isItemInWishList", isItemInWishList);

  const handleWishList = useCallback(async () => {
    if (!isLoggedIn) {
      errorToast("Please log in to add products to your wishlist");
      router.push("/login");
      return;
    }
    toggleProductsFromWishList(sku);
    let response;
    if (isItemInWishList) {
      [response] = await removeItemFromWishList(productId);
    } else {
      [response] = await addToWishlist(productId);
    }
    if (response?.success) {
      successToast(response?.message ?? "");
    } else {
      errorToast("Something went wrong. Please try again");
      toggleProductsFromWishList(sku);
    }
  }, [
    isLoggedIn,
    toggleProductsFromWishList,
    sku,
    isItemInWishList,
    router,
    productId,
  ]);

  const images = useMemo(() => {
    if (!image) {
      return [];
    }
    return fetchProductImages(image);
  }, [image]);

  return (
    <div className="flex flex-col items-center relative">
      <div className="relative h-[150px] w-[150px] md:h-[200px] lg:h-[200px] xl:h-[200px] 2xl:h-[200px] md:w[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px]">
        {images[0] && (
          <Image
            src={images[0]}
            alt={name || ""}
            fill
            className="object-cover"
          />
        )}
      </div>
      <h2 className="text-xl text-center font-semibold tracking-widest text-brick uppercase mt-3">
        {name}
      </h2>
      <p className="text-sm my-2 text-center font-light">{description}</p>
      <p className="text-brick text-center font-semibold mb-4">{price}</p>
      <div className="transition-all duration-500 lg:absolute lg:top-20 xl:absolute xl:top-20 2xl:absolute 2xl:top-20 opacity-100 lg:opacity-0 xl:opacity-0 2xl:opacity-0 lg:group-hover:opacity-100 xl:group-hover:opacity-100 2xl:group-hover:opacity-100">
        <Link
          className="text-white2 uppercase font-xl p-3 bg-gradient-to-br from-[#5C4033] via-[#A0522D] to-[#DEB887]"
          href={{
            pathname: `/products/${sku}`,
          }}
        >
          view more
        </Link>
        <Button
          className="absolute -top-2 lg:-top-20 lg:-right-16"
          onClick={handleWishList}
        >
          <Icon
            icon="heart"
            className={`hover:fill-brick ${
              isItemInWishList ? "fill-brick" : "fill-offWhite"
            } `}
          />
        </Button>
      </div>
    </div>
  );
};

export default Product;
