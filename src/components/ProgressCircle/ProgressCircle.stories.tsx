import { ProgressCircle } from './ProgressCircle';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Feedback/ProgressCircle',
  component: ProgressCircle,
} satisfies Meta<typeof ProgressCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progressValue: 75,
  },
};

export const Small: Story = {
  args: {
    progressValue: 50,
    size: 40,
  },
};

export const Large: Story = {
  args: {
    progressValue: 100,
    size: 100,
  },
};
