import { t } from 'i18next';
import { Avatar } from './Avatar';
import { IAvatar } from './Avatar.types';
import { Meta, StoryObj } from '@storybook/react';
import { DOCS_COLOR_TYPES } from '../../docs/utils/constants';

const meta: Meta<IAvatar> = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: 'text',
      description: t('docs_image'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    username: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
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

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
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

type Story = StoryObj<IAvatar>;

export const Default: Story = {
  args: {
    image: 'https://encurtador.com.br/Kw9pE',
  },
};

export const AvatarText: Story = {
  args: {
    username: 'User',
  },
};

(Avatar as React.FC).displayName = 'Avatar';
