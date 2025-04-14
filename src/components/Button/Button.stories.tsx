import { t } from 'i18next';
import { Button } from './Button';
import { IButton } from './Button.types';
import { Meta, StoryObj } from '@storybook/react';
import {
  DOCS_COLOR_TYPES,
  DOCS_ICON_OPTIONS,
  DOCS_ICON_TYPES,
} from '../../docs/utils/constants';

const meta: Meta<IButton> = {
  title: 'Components/Buttons/Button',
  component: Button,
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

    onClick: {
      description: t('docs_click'),
      table: {
        type: { summary: '() => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    isLoading: {
      control: 'boolean',
      description: t('docs_loading'),
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

    isDisabled: {
      control: 'boolean',
      description: t('docs_disabled'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },

    textColor: {
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

    width: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100%' },
        category: 'Component',
      },
    },

    height: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40px' },
        category: 'Component',
      },
    },

    padding: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '8px 16px' },
        category: 'Component',
      },
    },

    gap: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '12px' },
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

    borderColor: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'primary' },
        category: 'Component',
      },
    },

    borderWidth: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Component',
      },
    },

    leftIcon: {
      control: 'select',
      options: DOCS_ICON_OPTIONS,
      description: t('docs_icon_selection'),
      table: {
        type: { summary: DOCS_ICON_TYPES },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    rightIcon: {
      control: 'select',
      options: DOCS_ICON_OPTIONS,
      description: t('docs_icon_selection'),
      table: {
        type: { summary: DOCS_ICON_TYPES },
        defaultValue: { summary: 'undefined' },
        category: 'Icon',
      },
    },

    leftIconColor: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'primary' },
        category: 'Icon',
      },
    },

    rightIconColor: {
      control: 'text',
      description: t('docs_predefined'),
      table: {
        type: { summary: DOCS_COLOR_TYPES },
        defaultValue: { summary: 'primary' },
        category: 'Icon',
      },
    },

    leftIconSize: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '14' },
        category: 'Icon',
      },
    },

    rightIconSize: {
      control: 'number',
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '14' },
        category: 'Icon',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IButton>;

export const Default: Story = {
  args: {
    text: 'Hello World',
    onClick: () => console.log('Clicked!'),
    width: 200,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Hello World',
    isDisabled: true,
    width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const Loading: Story = {
  args: {
    text: 'Hello World',
    isLoading: true,
    width: 200,
    onClick: () => alert('Clicked!'),
  },
};

export const WithIcons: Story = {
  args: {
    text: 'Icons',
    leftIcon: 'BulbIcon',
    rightIcon: 'BulbIcon',
    width: 200,
  },
};
