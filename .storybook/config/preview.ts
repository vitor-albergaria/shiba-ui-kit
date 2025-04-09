import '../../src/i18n/index';

import type { Preview } from '@storybook/react';
import { i18nDecorator } from '../decorators/i18nDecorator';
import { themeDecorator } from '../decorators/themeDecorator';
import { DocsSettings } from '../../src/docs/components/DocsSettings';

export const decorators = [themeDecorator, i18nDecorator];

const preview: Preview = {
  tags: ['autodocs', '!dev'],
  parameters: {
    docsOnly: true,
    layout: 'fullscreen',
    docs: { container: DocsSettings },
    options: {
      storySort: {
        order: ['Quick Start', 'Design System', 'Components'],
      },
    },
  },
};

export default preview;
