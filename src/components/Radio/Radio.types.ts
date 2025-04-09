export interface IRadio extends React.HTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean;
  handleChange?: (selected: boolean) => void;
  size?: number;
  background?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
} 