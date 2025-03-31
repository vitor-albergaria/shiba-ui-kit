import { FONT_SIZE } from '../constants/fontSize';
import { COMMON_COLORS, LIGHT_THEME } from '../constants/color';
import { FONT_WEIGHT } from '../constants/fontWeight';

export function getThemeColor(color: string): string {
  if (Object.keys({ ...LIGHT_THEME, ...COMMON_COLORS }).includes(color)) {
    return `var(--${color})`;
  }

  return color;
}

export function getThemeFontSize(size: string): string {
  if (Object.keys(FONT_SIZE).includes(size)) {
    return `var(--${size})`;
  }

  return size;
}

export function getThemeFontWeight(weight: string): string {
  if (Object.keys(FONT_WEIGHT).includes(weight)) {
    return `var(--${weight})`;
  }

  return weight;
}
