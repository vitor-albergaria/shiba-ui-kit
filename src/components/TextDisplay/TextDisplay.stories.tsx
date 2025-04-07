import { t } from 'i18next';
import { TextDisplay } from './TextDisplay';
import { Meta, StoryObj } from '@storybook/react';
import { ITextDisplay } from './TextDisplay.types';

const meta: Meta<ITextDisplay> = {
  title: 'Components/TextElements/TextDisplay',
  component: TextDisplay,
};

export default meta;

type Story = StoryObj<ITextDisplay>;

export const Example: Story = {
  args: {
    text: t('docs_sample_text'),
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
