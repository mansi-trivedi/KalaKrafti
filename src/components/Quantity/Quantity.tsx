"use client";
import { useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

const Quantity = () => {
  const [value, setValue] = useState(1);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center border border-brick p-2 ">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-10 text-center font-light focus:outline-none appearance-none"
      />
      <div className="flex flex-col">
        <Button
          type="button"
          onClick={increment}
          className="hover:cursor-pointer"
        >
          <Icon icon="upArrow" size={18} />
        </Button>
        <Button
          type="button"
          onClick={decrement}
          className="hover:cursor-pointer"
        >
          <Icon icon="downArrow" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
