import { Skeleton } from './Skeleton';
import { ISkeleton } from './Skeleton.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ISkeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
};

export default meta;

type Story = StoryObj<ISkeleton>;

export const Default: Story = {};
