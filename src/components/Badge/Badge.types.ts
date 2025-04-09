import { IconKeys } from "../Icon/Icon.types";

export interface IBadge {
  text?: string;
  borderRadius?: number;
  background?: string;
  color?: string;
  rightIcon?: IconKeys;
  isHidden?: boolean;
  leftIcon?: IconKeys;
  onClick?: () => void;
}
