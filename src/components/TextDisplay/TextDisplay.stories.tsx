import { TextDisplay } from './TextDisplay';
import { Meta, StoryObj } from '@storybook/react';
import { ITextDisplay } from './TextDisplay.types';
import { t } from 'i18next';
import {
  DOCS_FONT_SIZE_OPTIONS,
  DOCS_FONT_SIZE_TYPES,
  DOCS_FONT_WEIGHT_OPTIONS,
  DOCS_FONT_WEIGHT_TYPES,
  DOCS_COLOR_TYPES,
} from '../../docs/utils/constants';

const meta: Meta<ITextDisplay> = {
  title: 'Components/Typography/TextDisplay',
  component: TextDisplay,
  argTypes: {
    text: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    color: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'content' },
        category: 'Component',
      },
    },

    fontSize: {
      control: 'select',
      options: DOCS_FONT_SIZE_OPTIONS,
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_FONT_SIZE_TYPES },
        defaultValue: { summary: 'md' },
        category: 'Component',
      },
    },

    fontWeight: {
      control: 'select',
      options: DOCS_FONT_WEIGHT_OPTIONS,
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_FONT_WEIGHT_TYPES },
        defaultValue: { summary: 'normal' },
        category: 'Component',
      },
    },

    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: t('docs_predefined'),
      table: {
        type: { summary: 'left | center | right | justify' },
        defaultValue: { summary: 'left' },
        category: 'Component',
      },
    },

    textDecoration: {
      control: 'select',
      options: ['none', 'underline', 'line-through', 'overline'],
      description: t('docs_predefined'),
      table: {
        type: { summary: 'none | underline | line-through | overline' },
        defaultValue: { summary: 'none' },
        category: 'Component',
      },
    },

    lineHeight: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    letterSpacing: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'normal' },
        category: 'Component',
      },
    },

    isHidden: {
      control: 'boolean',
      description: t('docs_hide'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ITextDisplay>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
    color: 'content',
    fontSize: 'lg',
    fontWeight: 'regular',
    textAlign: 'left',
    textDecoration: 'none',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    isHidden: false,
  },
};
