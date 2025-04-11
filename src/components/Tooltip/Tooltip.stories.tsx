import React from 'react';
import { Tooltip } from './Tooltip';
import { ITooltip } from './Tooltip.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<ITooltip> = {
  title: 'Components/Feedback/Tooltip',
  component: Tooltip,
};

export default meta;

type Story = StoryObj<ITooltip>;

export const Default: Story = {
  args: {
    content: 'Tooltip...',
    children: <h2 style={{ color: '#7F2BFF' }}>Hover</h2>,
    position: 'bottom',
  },
};