import React from "react";
import { categories } from "@/constants/categories";
import { FilterProp } from "types/filter";

const priceOptions = [
  { label: "Under Rs 2,000", value: [0, 2000] },
  { label: "Rs 2,001 - Rs 5,000", value: [2001, 5000] },
  { label: "Rs 5,001 - Rs 10,000", value: [5001, 10000] },
  { label: "Above Rs 10,000", value: [20000] },
];

const Filter: React.FC<FilterProp> = (prop) => {
  const { selectedCategories, setPrice, setSelectedCategories, price } = prop;
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((b) => b !== category)
        : [...prev, category]
    );
  };

  return (
    <div className=" p-2">
      <h2 className="text-brick tracking-wider font-semibold text-center">
        FILTER
      </h2>

      {/* Category */}
      <div className="m-2">
        <h2 className="font-semibold text-brick mb-2">Brand</h2>
        <div className="">
          {categories.map((category) => (
            <label
              key={category.name}
              className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  className="accent-brick"
                />
                <span className="text-sm">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">{category.count}</span>
            </label>
          ))}
        </div>
      </div>

      {/* price */}
      <div className="m-2">
        <h2 className="font-semibold text-brick mb-2">Price</h2>
        <div className="">
          {priceOptions.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
            >
              <input
                type="radio"
                name="priceRange"
                value={option.label}
                checked={price?.label === option.label}
                onChange={() =>
                  setPrice({
                    value: option.value[0].toString(),
                    label: option.label,
                  })
                }
                className="accent-brick"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
