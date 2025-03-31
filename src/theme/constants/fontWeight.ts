type DefaultFontWeight = {
  light: number;
  regular: number;
  medium: number;
  strong: number;
  bold: number;
  heavy: number;
};

export const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  strong: 600,
  bold: 700,
  heavy: 800,
};

export type FontWeightTypes = DefaultFontWeight;
export type FontWeightKeys = keyof FontWeightTypes;
