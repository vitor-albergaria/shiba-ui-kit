import { Spinner } from './Spinner';
import { ISpinner } from './Spinner.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ISpinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<ISpinner>;

export const Default: Story = {
  args: { size: 32, background: 'primary', isHidden: false },
};
