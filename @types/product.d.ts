import { APIResponse } from "types/api";

type ProductType = {
  productId: string;
  SKU: string;
  description: string;
  stock: string;
  price: number;
  categoryId: string;
  name: string;
  warranty: string;
  discount: string;
  images: string;
} | null;

type ProductAPIProps = {
  product: ProductType | null;
  getCollectionResponse: APIResponse<ProductAPIResponse | null> | undefined;
  getProductWithSkuOrIdResponse: APIResponse<ProductType | null>;
  getAllProductApiResponse: APIResponse<{
    products: ProductType[];
    totalProducts: number;
    currentPage: number;
  }>;
  getProductCategoryApiResponse: APIResponse<{
    products: Array<ProductType>;
  }>;
};

export type { ProductAPIProps, ProductType };
