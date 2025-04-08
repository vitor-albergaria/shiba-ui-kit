import {Icon} from './Icon';
import { IIcon } from './Icon.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IIcon> = {
  title: 'Components/Feedback/Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<IIcon>;

export const Default: Story = {
  args: {
    icon: 'ForwardIcon',
    size: 32,
    background: 'content',
    isHidden: false,
  },
};
