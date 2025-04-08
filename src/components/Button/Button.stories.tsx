import { Button } from './Button';
import { IButton } from './Button.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IButton> = {
  title: 'Components/Buttons/Button',
  component: Button,
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
