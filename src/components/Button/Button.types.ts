import { IconKeys } from '../Icon/Icon.types';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isHidden?: boolean;
  isDisabled?: boolean;

  rightIcon?: IconKeys;
  leftIcon?: IconKeys;
  rightIconSize?: number;
  leftIconSize?: number;
  rightIconColor?: string;
  leftIconColor?: string;

  width?: number;
  height?: number;
  textColor?: string;
  background?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  padding?: string;
  gap?: string;
}
