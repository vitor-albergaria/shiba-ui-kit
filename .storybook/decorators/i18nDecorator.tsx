import React from 'react';
import i18n from '../../src/i18n';
import { Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';

export const i18nDecorator: Decorator = (Story) => (
  <I18nextProvider i18n={i18n}>
    <Story />
  </I18nextProvider>
);
