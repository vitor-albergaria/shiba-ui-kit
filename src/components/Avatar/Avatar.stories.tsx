import { Avatar } from './Avatar';
import { IAvatar } from './Avatar.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IAvatar> = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<IAvatar>;

export const Default: Story = {
  args: {
    image: 'https://encurtador.com.br/Kw9pE',
  },
};

export const AvatarText: Story = {
  args: {
    username: 'User',
  },
};

(Avatar as React.FC).displayName = 'Avatar';
