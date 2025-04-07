import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeVariant } from '../../src/theme/constants/color';
import { ThemeProvider } from '../../src/theme/provider/ThemeProvider';
import { CenterContainer } from '../../src/docs/components/CenterContainer';
import { StorySettings } from '../../src/docs/components/StorySettings';

export const themeDecorator: Decorator = (Story) => {
  const selectedTheme = localStorage.getItem('theme') || 'light';

  return (
    <ThemeProvider selectedTheme={selectedTheme as ThemeVariant}>
      <CenterContainer>
        <StorySettings />
        <Story />
      </CenterContainer>
    </ThemeProvider>
  );
};
