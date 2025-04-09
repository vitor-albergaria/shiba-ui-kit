import Switch from './Switch';
import { ISwitch } from './Switch.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ISwitch> = {
  title: 'Components/Buttons/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<ISwitch>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true } };

