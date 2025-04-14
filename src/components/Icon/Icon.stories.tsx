import { t } from 'i18next';
import { Icon } from './Icon';
import { IIcon } from './Icon.types';
import { Meta, StoryObj } from '@storybook/react';
import { DOCS_ICON_OPTIONS, DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<IIcon> = {
  title: 'Components/Feedback/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: DOCS_ICON_OPTIONS,
      description: t('docs_icon_selection'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ForwardIcon' },
        category: 'Component',
      },
    },

    size: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
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

type Story = StoryObj<IIcon>;

export const Default: Story = {
  args: {
    icon: 'ForwardIcon',
    size: 32,
    background: 'content',
    isHidden: false,
  },
};
