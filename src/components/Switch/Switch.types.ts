
export interface ISwitch {
  isChecked?: boolean;
  handleChange?: (isChecked?: boolean) => void;
  size?: number;
  background?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
}