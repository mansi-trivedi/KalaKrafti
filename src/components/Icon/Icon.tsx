import React from "react";

import { ReactComponent as UserSvg } from "@/Icons/user.svg";
import { ReactComponent as CartSvg } from "@/Icons/cart.svg";
import { ReactComponent as HeartSvg } from "@/Icons/heart.svg";
import { ReactComponent as MenuSvg } from "@/Icons/menu.svg";
import { ReactComponent as UpArrowSvg } from "@/Icons/upArrow.svg";
import { ReactComponent as LeftArrowSvg } from "@/Icons/leftArrow.svg";
import { ReactComponent as RightArrowSvg } from "@/Icons/rightArrow.svg";
import { ReactComponent as FilterSvg } from "@/Icons/filter.svg";
import { ReactComponent as CrossSvg } from "@/Icons/cross.svg";
import { ReactComponent as CrossWhiteSvg } from "@/Icons/crossWhite.svg";
import { ReactComponent as YouTubeSvg } from "@/Icons/youtube.svg";
import { ReactComponent as InstagramSvg } from "@/Icons/instagram.svg";
import { ReactComponent as facebookSvg } from "@/Icons/facebook.svg";
import { ReactComponent as DownArrowSvg } from "@/Icons/downArrow.svg";
import { ReactComponent as TrashSvg } from "@/Icons/trash.svg";

type IconSvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type IconType = {
  user: IconSvgComponent;
  cart: IconSvgComponent;
  heart: IconSvgComponent;
  menu: IconSvgComponent;
  upArrow: IconSvgComponent;
  leftArrow: IconSvgComponent;
  rightArrow: IconSvgComponent;
  filter: IconSvgComponent;
  cross: IconSvgComponent;
  crossWhite: IconSvgComponent;
  youTube: IconSvgComponent;
  facebook: IconSvgComponent;
  instagram: IconSvgComponent;
  downArrow: IconSvgComponent;
  trash: IconSvgComponent;
};

// Mapping SVG component to Icon
export const ICON_MAPPING: IconType = {
  user: UserSvg,
  cart: CartSvg,
  heart: HeartSvg,
  menu: MenuSvg,
  upArrow: UpArrowSvg,
  leftArrow: LeftArrowSvg,
  rightArrow: RightArrowSvg,
  filter: FilterSvg,
  cross: CrossSvg,
  crossWhite: CrossWhiteSvg,
  youTube: YouTubeSvg,
  facebook: facebookSvg,
  instagram: InstagramSvg,
  downArrow: DownArrowSvg,
  trash: TrashSvg,
};

export type IconTypeProp =
  | "user"
  | "cart"
  | "heart"
  | "menu"
  | "upArrow"
  | "leftArrow"
  | "rightArrow"
  | "filter"
  | "cross"
  | "crossWhite"
  | "facebook"
  | "instagram"
  | "youTube"
  | "downArrow"
  | "trash";

export type IconSizes =
  | 8
  | 16
  | 18
  | 20
  | 24
  | 26
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80;

export type IconProps = {
  icon: IconTypeProp;
  size?: IconSizes;
  className?: string;
  title?: string;
};

const Icon = ({ className, icon, size = 24 }: IconProps) => {
  const CodePoint = ICON_MAPPING[icon];
  if (!CodePoint) {
    return null;
  }

  const classes = className ?? "";

  return (
    <CodePoint
      style={{ height: `${size}px`, width: `${size}px` }}
      className={`transition-all duration-150 ease-linear ${classes}`}
      focusable={false}
    />
  );
};

Icon.displayName = "Icon";

export default Icon;
