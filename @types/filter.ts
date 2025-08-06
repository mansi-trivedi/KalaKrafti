type PriceType = {
  label: string;
  value: number[];
} | null;

type FilterProp = {
  setPrice: React.Dispatch<React.SetStateAction<PriceType>>;
  price: PriceType;
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategories: string[];
};

export type { PriceType, FilterProp };
