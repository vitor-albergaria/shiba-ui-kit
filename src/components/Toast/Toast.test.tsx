import { Fragment } from 'react';
import ToastContainer, { toast } from './Toast';
import { render, screen, act } from '@testing-library/react';
import { ThemeProvider } from '../../theme/provider/ThemeProvider';

describe('UI Component: Toast', () => {
  it('should render toasts added to the toastManager', async () => {
    render(
      <ThemeProvider>
        <Fragment>
          <ToastContainer />
        </Fragment>
      </ThemeProvider>
    );

    await act(async () => {
      toast.success('Success message');
    });

    const toastElement = screen.getByText('Success message');
    expect(toastElement).toBeInTheDocument();
  });
});
