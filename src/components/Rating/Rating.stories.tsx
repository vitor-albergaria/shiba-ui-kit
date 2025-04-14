import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { IRating } from './Rating.types';
import { t } from 'i18next';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<IRating> = {
  title: 'Components/Feedback/Rating',
  component: Rating,
  argTypes: {
    rating: {
      control: 'number',
      description: t('docs_rating'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    maxStars: {
      control: 'number',
      description: t('docs_maxStars'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
        category: 'Component',
      },
    },

    readonly: {
      control: 'boolean',
      description: t('docs_readonly'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },

    size: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '30' },
        category: 'Component',
      },
    },

    background: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },

    gap: {
      control: 'text',
      description: t('docs_string'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px' },
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

    handleChange: {
      description: t('docs_click'),
      table: {
        type: { summary: '(rating: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IRating>;

export const Default: Story = {
  args: {
    rating: 4,
  },
};
