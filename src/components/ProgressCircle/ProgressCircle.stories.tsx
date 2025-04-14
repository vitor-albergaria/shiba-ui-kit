import { t } from 'i18next';
import { ProgressCircle } from './ProgressCircle';
import type { Meta, StoryObj } from '@storybook/react';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';
const meta: Meta<typeof ProgressCircle> = {
  title: 'Components/Feedback/ProgressCircle',
  component: ProgressCircle,
  argTypes: {
    progressValue: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '60' },
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
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progressValue: 75,
  },
};

export const Small: Story = {
  args: {
    progressValue: 50,
    size: 40,
  },
};

export const Large: Story = {
  args: {
    progressValue: 100,
    size: 100,
  },
};
