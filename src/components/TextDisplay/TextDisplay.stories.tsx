import { TextDisplay } from './TextDisplay';
import { Meta, StoryObj } from '@storybook/react';
import { ITextDisplay } from './TextDisplay.types';

const meta: Meta<ITextDisplay> = {
  title: 'Components/Typography/TextDisplay',
  component: TextDisplay,
};

export default meta;

type Story = StoryObj<ITextDisplay>;

export const Default: Story = {
  args: {
    text: 'Hello World!',
    color: 'content',
    fontSize: 'lg',
    fontWeight: 'regular',
    textAlign: 'left',
    textDecoration: 'none',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    isHidden: false,
  },
};
