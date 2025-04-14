import { Meta, StoryObj } from '@storybook/react';
import { Range } from './Range';
import { IRange } from './Range.types';
import { t } from 'i18next';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<IRange> = {
  title: 'Components/Inputs/Range',
  component: Range,
  argTypes: {
    value: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    handleChange: {
      description: t('docs_click'),
      table: {
        type: { summary: '(range: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    width: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200px' },
        category: 'Component',
      },
    },

    height: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8px' },
        category: 'Component',
      },
    },

    background: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'highlight' },
        category: 'Component',
      },
    },

    isFullWidth: {
      control: 'boolean',
      description: t('docs_full_width'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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

type Story = StoryObj<IRange>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
