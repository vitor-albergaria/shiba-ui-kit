import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeVariant } from '../../src/theme/constants/color';
import { ThemeProvider } from '../../src/theme/config/provider/ThemeProvider';
import { CenterContainer } from '../../src/docs/components/CenterContainer';

export const themeDecorator: Decorator = (Story) => {
  const selectedTheme = localStorage.getItem('theme') || 'light';

  return (
    <ThemeProvider selectedTheme={selectedTheme as ThemeVariant}>
      <CenterContainer>
        <Story />
      </CenterContainer>
    </ThemeProvider>
  );
};
