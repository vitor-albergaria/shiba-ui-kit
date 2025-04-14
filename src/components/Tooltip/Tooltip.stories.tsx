import { t } from 'i18next';
import { Tooltip } from './Tooltip';
import { ITooltip } from './Tooltip.types';
import { Meta, StoryObj } from '@storybook/react';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<ITooltip> = {
  title: 'Components/Feedback/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      description: t('docs_children'),
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    content: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: t('docs_predefined'),
      table: {
        type: { summary: 'top | right | bottom | left' },
        defaultValue: { summary: 'center' },
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

    color: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'textDefault' },
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

type Story = StoryObj<ITooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip...',
    children: <h2 style={{ color: '#7F2BFF' }}>Hover</h2>,
    position: 'bottom',
  },
};
