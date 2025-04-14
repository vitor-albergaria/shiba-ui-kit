import { t } from 'i18next';
import { Spinner } from './Spinner';
import { ISpinner } from './Spinner.types';
import { Meta, StoryObj } from '@storybook/react';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<ISpinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
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

type Story = StoryObj<ISpinner>;

export const Default: Story = {
  args: { size: 32, background: 'primary', isHidden: false },
};
