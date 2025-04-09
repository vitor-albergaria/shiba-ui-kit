import { IconKeys } from '../Icon/Icon.types';

export interface ICheckbox extends React.HTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean;
  handleChange?: (checked: boolean) => void;
  size?: number;
  background?: string;
  icon?: IconKeys;
  iconColor?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
}
