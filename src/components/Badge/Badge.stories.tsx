import { Badge } from './Badge';
import { IBadge } from './Badge.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IBadge> = {
  title: 'Components/Feedback/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<IBadge>;

export const Default: Story = {
  args: {},
};
