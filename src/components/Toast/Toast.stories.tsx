import ToastContainer, { toast } from './Toast';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { ToastType } from './Toast.types';
import { t } from 'i18next';

const meta: Meta<typeof ToastContainer> = {
  title: 'Components/Feedback/Toast',
  component: ToastContainer,
  parameters: {
    docs: {
      description: {
        component: t('docs_toast'),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToastContainer>;

export const DefaultOptions: Story = {
  render: () => {
    const showToast = (message: string, type: ToastType) => {
      return toast[type](message, { width: 280 });
    };

    return (
      <>
        <Button
          text='Success'
          onClick={() => showToast('Shiba UI - Toast Success', 'success')}
          background='success'
          width={100}
        />
        <Button
          text='Warning'
          onClick={() => showToast('Shiba UI - Toast Warning', 'warning')}
          background='warning'
          width={100}
        />
        <Button
          text='Error'
          onClick={() => showToast('Shiba UI - Toast Error', 'error')}
          background='error'
          width={100}
        />
        <Button
          text='Custom'
          onClick={() =>
            toast.success('Shiba UI - Toast Custom', {
              background: 'content',
              borderColor: 'primary',
              color: 'primary',
              timeout: 5000,
            })
          }
          background='primary'
          width={100}
        />
        <ToastContainer />
      </>
    );
  },
};
