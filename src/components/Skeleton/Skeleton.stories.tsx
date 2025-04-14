import { t } from 'i18next';
import { Skeleton } from './Skeleton';
import { ISkeleton } from './Skeleton.types';
import { Meta, StoryObj } from '@storybook/react';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<ISkeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    background: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'highlight' },
        category: 'Component',
      },
    },

    width: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50px' },
        category: 'Component',
      },
    },

    height: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50px' },
        category: 'Component',
      },
    },

    borderRadius: {
      control: 'text',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px' },
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

    isFullSize: {
      control: 'boolean',
      description: t('docs_full_width'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ISkeleton>;

export const Default: Story = {};
