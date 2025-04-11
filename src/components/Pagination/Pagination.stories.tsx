import { Pagination } from './Pagination';
import { IPagination } from './Pagination.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IPagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
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
