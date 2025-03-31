type DefaultBorderWidth = {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export const BORDER_WIDTH = {
  rm: '0px',
  xs: '0.5px',
  sm: '1px',
  md: '1.5px',
  lg: '2px',
};

export type BorderWidthTypes = DefaultBorderWidth;
export type BorderWidthKeys = keyof BorderWidthTypes;
