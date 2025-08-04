import React from "react";
import { ButtonProps } from "types/button";

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
