"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { useCartContext } from "@/app/contexts/CartContext";

type QuantityProps = {
  quantity: number;
  productId: string;
};

const Quantity: FC<QuantityProps> = (props) => {
  const { quantity = 1, productId } = props;
  // const [value, setValue] = useState(1);
  const [itemQuantity, setItemQuantity] = useState<number>(quantity);

  const { updateCartItemQuantity } = useCartContext();

  const handleOnIncreaseQtyBtn = useCallback(async () => {
    const updatedQuantity = itemQuantity + 1;
    setItemQuantity(updatedQuantity);
    await updateCartItemQuantity(productId, updatedQuantity);
  }, [itemQuantity, updateCartItemQuantity, productId]);

  const handleOnDecreaseQtyBtn = useCallback(async () => {
    if (itemQuantity > 1) {
      const updatedQuantity = itemQuantity - 1;
      setItemQuantity(updatedQuantity);
      await updateCartItemQuantity(productId, updatedQuantity);
    }
  }, [itemQuantity, updateCartItemQuantity, productId]);

  // const increment = () => setValue((prev) => prev + 1);
  // const decrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));

  useEffect(() => {
    setItemQuantity(quantity);
  }, [quantity]);

  return (
    <div className="flex items-center border border-brick p-2 ">
      <input
        type="number"
        value={itemQuantity}
        className="w-10 text-center font-light focus:outline-none appearance-none"
      />
      <div className="flex flex-col">
        <Button
          type="button"
          onClick={handleOnIncreaseQtyBtn}
          className="hover:cursor-pointer"
        >
          <Icon icon="upArrow" size={18} />
        </Button>
        <Button
          type="button"
          onClick={handleOnDecreaseQtyBtn}
          className="hover:cursor-pointer"
        >
          <Icon icon="downArrow" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
