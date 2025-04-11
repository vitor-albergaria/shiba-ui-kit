export interface IRange {
  value?: number;
  handleChange?: (range: number) => void;
  width?: number;
  height?: number;
  isFullWidth?: boolean;
  background?: string;
  isHidden?: boolean;
} 