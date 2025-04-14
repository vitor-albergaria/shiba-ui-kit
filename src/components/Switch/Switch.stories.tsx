import { t } from 'i18next';
import Switch from './Switch';
import { ISwitch } from './Switch.types';
import { Meta, StoryObj } from '@storybook/react';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<ISwitch> = {
  title: 'Components/Buttons/Switch',
  component: Switch,
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: t('docs_value').replace('number', 'boolean'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },

    handleChange: {
      description: t('docs_on_change'),
      table: {
        type: { summary: '(isChecked?: boolean) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '28' },
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

    isDisabled: {
      control: 'boolean',
      description: t('docs_disabled'),
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

type Story = StoryObj<ISwitch>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true } };

