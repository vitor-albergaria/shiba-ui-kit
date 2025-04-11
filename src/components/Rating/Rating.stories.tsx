import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import { IRating } from './Rating.types';

const meta: Meta<IRating> = {
  title: 'Components/Feedback/Rating',
  component: Rating,
};

export default meta;

type Story = StoryObj<IRating>;

export const Default: Story = {
  args: {
    rating: 4,
  },
};
