export type TextAlignmentType =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'inherit';

export type TextDecorationType =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'overline';

type FontWeightType =
  | 'light'
  | 'regular'
  | 'medium'
  | 'strong'
  | 'bold'
  | 'heavy';

export interface ITextDisplay {
  text?: string;
  fontSize?: string;
  fontWeight?: FontWeightType;
  color?: string;
  textAlign?: TextAlignmentType;
  textDecoration?: TextDecorationType;
  lineHeight?: string;
  letterSpacing?: string;
  isHidden?: boolean;
}
