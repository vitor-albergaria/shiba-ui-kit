import { createContext } from 'react';
import { ColorTypes, ThemeVariant } from '../constants/color';

interface ThemeContextType {
  theme: ThemeVariant;
  customTheme?: Partial<ColorTypes>;
  setTheme: (theme: ThemeVariant) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});
