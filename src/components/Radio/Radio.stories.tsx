import { Radio } from './Radio';
import { IRadio } from './Radio.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IRadio> = {
  title: 'Components/Buttons/Radio',
  component: Radio,
};

export default meta;

type Story = StoryObj<IRadio>;

export const Default: Story = {};

export const Disabled: Story = { args: { isDisabled: true } };
