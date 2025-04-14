import { t } from 'i18next';
import { Pagination } from './Pagination';
import { IPagination } from './Pagination.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IPagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    itemsPerPage: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    maxVisiblePages: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    totalItems: {
      control: 'number',
      description: t('docs_value'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
    selectPageText: {
      control: 'text',
      description: t('docs_content'),
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Page:' },
        category: 'Component',
      },
    },
    onPageChange: {
      description: t('docs_click'),
      table: {
        type: { summary: '(page: number) => void' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },
  },
};

export default meta;

type Story = StoryObj<IPagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    itemsPerPage: 1,
    maxVisiblePages: 5,
    totalItems: 40,
    onPageChange: () => {},
  },
};
