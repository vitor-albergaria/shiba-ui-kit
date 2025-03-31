import { FONT_SIZE } from '../constants/fontSize';
import { BORDER_RADIUS } from '../constants/borderRadius';
import { COMMON_COLORS, LIGHT_THEME } from '../constants/color';
import { BORDER_WIDTH } from '../constants/borderWidth';
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

export function getThemeBorderRadius(radius: string): string {
  if (Object.keys(BORDER_RADIUS).includes(radius)) {
    return `var(--${radius})`;
  }

  return radius;
}

export function getThemeBorderWidth(width: string): string {
  if (Object.keys(BORDER_WIDTH).includes(width)) {
    return `var(--${width})`;
  }

  return width;
}

export function getThemeFontWeight(weight: string): string {
  if (Object.keys(FONT_WEIGHT).includes(weight)) {
    return `var(--${weight})`;
  }

  return weight;
}
