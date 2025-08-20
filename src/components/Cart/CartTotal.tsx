import React from "react";

const CartTotal = () => {
  return (
    <div className="relative py-2">
      <table className="w-full border-collapse bg-white2">
        <tbody>
          <tr>
            <td className="py-2 px-4 text-lg font-light tracking-wider">
              Subtotal
            </td>
            <td className="py-2 px-4 text-lg font-medium tracking-wider text-right">
              Rs. 1000
            </td>
          </tr>

          {/* Shipping Row */}
          <tr>
            <td className="py-2 px-4 text-lg tracking-wider font-light">
              Shipping
            </td>
            <td className="py-2 px-4 text-lg font-medium tracking-wider text-right">
              Rs. 8.00
            </td>
          </tr>

          {/* Total Row */}
          <tr>
            <td className="py-2 px-4 text-lg font-medium  text-brick">Total</td>
            <td className="py-2 px-4 text-2xl font-semibold text-brick text-right">
              Rs. {100 + 8.0}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTotal;
