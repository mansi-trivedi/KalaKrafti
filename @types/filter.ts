type PriceType = {
  lable: string;
  value: string;
};

type FilterProp = {
  setPrice: React.Dispatch<React.SetStateAction<PriceType>>;
  price: PriceType;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategories: string[];
};

export type { PriceType, FilterProp };
