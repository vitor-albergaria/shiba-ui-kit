import {
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
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  lineHeight?: string;
  letterSpacing?: string;
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
  textAlign,
  textDecoration,
  lineHeight,
  letterSpacing,
}: DynamicStyles): React.CSSProperties {
  return {
    ...(width && { width }),
    ...(height && { height }),
    ...(padding && { padding }),
    ...(gap && { gap }),
    ...(color && { color: getThemeColor(color) }),
    ...(background && { background: getThemeColor(background) }),
    ...(fontSize && { fontSize: getThemeFontSize(fontSize) }),
    ...(fontWeight && { fontWeight: getThemeFontWeight(fontWeight) }),
    ...(textAlign && { textAlign }),
    ...(textDecoration && { textDecoration }),
    ...(letterSpacing && { letterSpacing }),
    ...(lineHeight && { lineHeight }),
    ...(borderColor && { borderColor: getThemeColor(borderColor) }),
    ...(borderRadius && { borderRadius }),
    ...(borderWidth && { borderWidth }),
  };
}
