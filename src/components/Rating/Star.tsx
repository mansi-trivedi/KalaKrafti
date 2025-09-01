import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Icon from "../Icon/Icon";

interface StarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  isFilled: boolean;
}

const Star: React.FC<StarProps> = ({
  isFilled = false,
  className,
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {isFilled ? (
        <Icon icon="starFilled" size={16} />
      ) : (
        <Icon icon="star" size={16} />
      )}
    </span>
  );
};

export default Star;
