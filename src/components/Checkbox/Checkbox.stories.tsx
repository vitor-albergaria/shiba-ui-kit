import { t } from 'i18next';
import { Checkbox } from './Checkbox';
import { ICheckbox } from './Checkbox.types';
import { Meta, StoryObj } from '@storybook/react';
import {
  DOCS_COLOR_TYPES,
  DOCS_ICON_OPTIONS,
  DOCS_ICON_TYPES,
} from '../../docs/utils/constants';

const meta: Meta<ICheckbox> = {
  title: 'Components/Buttons/Checkbox',
  component: Checkbox,
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
      description: t('docs_click'),
      table: {
        type: { summary: '(checked?: boolean) => void' },
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

    icon: {
      control: 'select',
      options: DOCS_ICON_OPTIONS,
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_ICON_TYPES },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    iconColor: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'pureWhite' },
        category: 'Icon',
      },

    },
  },

};

export default meta;

type Story = StoryObj<ICheckbox>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true, isChecked: true } };
