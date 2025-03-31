import {
  getThemeBorderWidth,
  getThemeBorderRadius,
  getThemeColor,
  getThemeFontSize,
  getThemeFontWeight,
} from './getTheme';

type DynamicStyles = {
  width?: string;
  height?: string;
  gap?: string;
  color?: string;
  background?: string;
  borderColor?: string;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  borderWidth?: string;
  fontWeight?: string;
};

export function handleDynamicStyles({
  width,
  height,
  background,
  color,
  fontSize,
  padding,
  borderRadius,
  borderWidth,
  fontWeight,
  borderColor,
  gap,
}: DynamicStyles): React.CSSProperties {
  const customStyles: React.CSSProperties = {};

  if (width) {
    customStyles.width = width;
  }

  if (height) {
    customStyles.height = height;
  }

  if (padding) {
    customStyles.padding = padding;
  }

  if (gap) {
    customStyles.gap = gap;
  }

  if (color) {
    customStyles.color = getThemeColor(color);
  }

  if (background) {
    customStyles.background = getThemeColor(background);
  }

  if (fontSize) {
    customStyles.fontSize = getThemeFontSize(fontSize);
  }

  if (fontWeight) {
    customStyles.fontWeight = getThemeFontWeight(fontWeight);
  }

  if (borderColor) {
    customStyles.borderColor = getThemeColor(borderColor);
  }

  if (borderRadius) {
    customStyles.borderRadius = getThemeBorderRadius(borderRadius);
  }

  if (borderWidth) {
    customStyles.borderWidth = getThemeBorderWidth(borderWidth);
  }

  return customStyles;
}
