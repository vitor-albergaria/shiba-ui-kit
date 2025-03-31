import React, { useCallback, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { globalStyles } from '../global/styles';
import { FONT_SIZE } from '../constants/fontSize';
import { FONT_WEIGHT } from '../constants/fontWeight';

import {
  ColorTypes,
  ThemeVariant,
  LIGHT_THEME,
  DARK_THEME,
  OCEAN_THEME,
  COMMON_COLORS,
} from '../constants/color';

interface ThemeProviderProps {
  children: React.ReactNode;
  selectedTheme?: ThemeVariant;
  customTheme?: Partial<ColorTypes>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  selectedTheme = 'light',
  customTheme = {},
}) => {
  const [theme, setTheme] = React.useState<ThemeVariant>(selectedTheme);

  const getAndApplyGlobalStyles = useCallback(() => {
    const existingStyle = document.getElementById('shiba-ui-global-styles');

    if (!existingStyle) {
      const style = document.createElement('style');

      style.id = 'shiba-ui-global-styles';
      style.textContent = globalStyles;
      document.head.appendChild(style);
    }
  }, []);

  const getAndApplyTheme = useCallback(() => {
    let baseColorTheme = LIGHT_THEME;

    if (theme === 'dark') baseColorTheme = DARK_THEME;
    if (theme === 'ocean') baseColorTheme = OCEAN_THEME;

    const finalTheme = {
      ...baseColorTheme,
      ...FONT_SIZE,
      ...FONT_WEIGHT,
      ...COMMON_COLORS,
      ...customTheme,
    };

    const root = document.documentElement;

    Object.entries(finalTheme).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme, customTheme]);

  useEffect(() => getAndApplyGlobalStyles(), []);
  useEffect(() => getAndApplyTheme(), [theme, customTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
