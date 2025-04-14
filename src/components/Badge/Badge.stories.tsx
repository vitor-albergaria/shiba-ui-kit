import { t } from 'i18next';
import { DOCS_COLOR_TYPES, DOCS_ICON_OPTIONS, DOCS_ICON_TYPES } from '../../docs/utils/constants';
import { Badge } from './Badge';
import { IBadge } from './Badge.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IBadge> = {
  title: 'Components/Feedback/Badge',
  component: Badge,
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
        defaultValue: { summary: 'primary' },
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

    borderRadius: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '8' },
        category: 'Component',
      },
    },

    leftIcon: {
      control: 'select',
      options: DOCS_ICON_OPTIONS,
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_ICON_TYPES},
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    rightIcon: {
      control: 'select',
      options: DOCS_ICON_OPTIONS,
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_ICON_TYPES},
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    onClick: {
      description: t('docs_click'),
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
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

type Story = StoryObj<IBadge>;

export const Default: Story = {
  args: {},
};
