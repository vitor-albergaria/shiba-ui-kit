import { Checkbox } from './Checkbox';
import { ICheckbox } from './types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ICheckbox> = {
  title: 'Components/Buttons/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<ICheckbox>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true, isChecked: true } };
