export type ToastType = 'success' | 'error' | 'warning';

export interface IToast {
  id?: string;
  message?: string;
  timeout?: number;

  variant?: ToastType;
  background?: string;
  color?: string;
  borderColor?: string;
  width?: number;
  height?: number;
}
