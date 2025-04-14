import { Meta, StoryObj } from '@storybook/react';
import { PieChart } from './PieChart';
import { IPieChart } from './PieChart.types';
import { t } from 'i18next';

const meta: Meta<IPieChart> = {
  title: 'Components/Feedback/PieChart',
  component: PieChart,
  argTypes: {
    data: {
      control: { type: 'object' },
      description: t('docs_pie_chart_data'),
      table: {
        type: { summary: 'IPieData[]' },
        defaultValue: { summary: 'undefined' },
        category: 'Component',
      },
    },

    size: {
      control: { type: 'number' },
      description: t('docs_type_number'),
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '120px' },
        category: 'Component',
      },
    },

    isHidden: {
      control: 'boolean',
      description: t('docs_hide'),
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Component',
      },
    },
  },
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
        onClick: () => alert('Color secondary clicked!'),
      },
      {
        percent: 20,
        color: 'primary',
        label: 'Typescript',
        onClick: () => alert('Color primary clicked!'),
      },
      {
        percent: 15,
        color: 'error',
        label: 'Storybook',
        onClick: () => alert('Color error clicked!'),
      },
      {
        percent: 20,
        color: 'alternative',
        label: 'CSS-in-JS',
        onClick: () => alert('Color alternative clicked!'),
      },
    ],
  },
};
