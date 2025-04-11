import { Meta, StoryObj } from '@storybook/react';
import { Range } from './Range';
import { IRange } from './Range.types';

const meta: Meta<IRange> = {
  title: 'Components/Inputs/Range',
  component: Range,
};

export default meta;

type Story = StoryObj<IRange>;

export const Default: Story = {
  args: {
    value: 0,
  },
};
