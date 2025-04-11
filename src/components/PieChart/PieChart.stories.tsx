import { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';
import { IPieChart } from './PieChart.types';

const meta: Meta<IPieChart> = {
  title: 'Components/Feedback/PieChart',
  component: PieChart,
};

export default meta;

type Story = StoryObj<IPieChart>;

export const Default: Story = {
  args: {
    data: [
      {
        percent: 45,
        color: 'secondary',
        label: 'React',
        onClick: () => alert('React clicked!'),
      },
      {
        percent: 20,
        color: 'primary',
        label: 'Typescript',
        onClick: () => alert('Typescript clicked!'),
      },
      {
        percent: 15,
        color: 'error',
        label: 'Storybook',
        onClick: () => alert('Storybook clicked!'),
      },
      {
        percent: 20,
        color: 'alternative',
        label: 'CSS-in-JS',
        onClick: () => alert('CSS-in-JS clicked!'),
      },
    ],
  },
};