type DefaultBorderRadius = {
  rm: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export const BORDER_RADIUS = {
  rm: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '32px',
};

export type BorderRadiusTypes = DefaultBorderRadius;
export type BorderRadiusKeys = keyof BorderRadiusTypes;
