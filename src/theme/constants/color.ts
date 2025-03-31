type DefaultColors = {
  background: string;
  section: string;
  highlight: string;
  accent: string;
  content: string;
  primary: string;
  secondary: string;
  alternative: string;
  success: string;
  warning: string;
  error: string;
  pureWhite: string;
  pureBlack: string;
};

export const LIGHT_THEME = {
  background: '#F5F5FB',
  section: '#FBFBFB',
  highlight: '#B5B5B5',
  accent: '#5C5C5C',
  content: '#151515',
};

export const DARK_THEME = {
  background: '#121212',
  section: '#181818',
  highlight: '#505050',
  accent: '#808080',
  content: '#FFFFFF',
};

export const OCEAN_THEME = {
  background: '#151B30',
  section: '#2F3652',
  highlight: '#4C4C4C',
  accent: '#A5A5A5',
  content: '#F7F7F7',
};

export const COMMON_COLORS = {
  primary: '#7F2BFF',
  secondary: '#486DF7',
  alternative: '#ED4968',
  error: '#C33336',
  success: '#0EB75A',
  warning: '#E0B02C',
  pureWhite: '#FFFFFF',
  pureBlack: '#000000',
};

export type ColorTypes = DefaultColors;
export type ColorKeys = keyof ColorTypes;

export type ThemeVariant = 'light' | 'dark' | 'ocean';
