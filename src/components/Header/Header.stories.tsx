import {Header} from './Header';
import { IHeader } from './Header.types';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<IHeader> = {
  title: 'Components/Navigation/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<IHeader>;

export const Default: Story = {
  args: {
    logo: 'Shiba UI',
    menuItems: [
      {
        id: 1,
        label: 'Home',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 2,
        label: 'About Me',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 3,
        label: 'Components',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 4,
        label: 'Games',
        handleClick: (label) => console.log(`Clicked ${label}`),
      },
      {
        id: 5,
        label: 'Settings',
        handleClick: (label) => console.log(`Clicked ${label}`),
        isInactive: true,
      },
    ],
  },
};

(Header as React.FC).displayName = 'Header';
