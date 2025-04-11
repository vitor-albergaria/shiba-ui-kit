import { Icon } from '../Icon/Icon';
import { nanoid } from 'nanoid';
import { IToast } from './Toast.types';
import React, { useState, useEffect } from 'react';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import styles from './Toast.module.css';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

const toastManager = {
  listeners: new Set<(toasts: IToast[]) => void>(),
  toasts: [] as IToast[],

  subscribe(listener: (toasts: IToast[]) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },

  addToast(toast: IToast) {
    const id = nanoid();
    this.toasts.push({ ...toast, id });
    this.notify();
  },

  removeToast(id: string) {
    if (id) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
      this.notify();
    }
  },

  notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]));
  },
};

export const toast = {
  success: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'success', ...options }),

  error: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'error', ...options }),

  warning: (message: string, options?: Partial<IToast>) =>
    toastManager.addToast({ message, variant: 'warning', ...options }),
};

const ToastMessage: React.FC<IToast> = ({
  id,
  message,
  color,
  timeout,
  background = 'pureWhite',
  borderColor,
  height,
  variant,
  width,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      const removeTimer = setTimeout(() => {
        if (id) {
          toastManager.removeToast(id);
        }
      }, 300);

      return () => clearTimeout(removeTimer);
    }, timeout || 3000);

    return () => clearTimeout(timer);
  }, [id, timeout]);

  const getVariantClass = () => {
    switch (variant) {
      case 'success':
        return styles.successVariant;
      case 'error':
        return styles.errorVariant;
      case 'warning':
        return styles.warningVariant;
      default:
        return '';
    }
  };

  const toastStyle = handleDynamicStyles({
    background,
    borderColor,
    height: height ? `${height}px` : undefined,
    width: width ? `${width}px` : undefined,
    borderRadius: '4px',
  });

  return (
    <div
      role="alert"
      aria-live="polite"
      data-testid="toast"
      className={`${styles.toastItem} ${getVariantClass()} ${isExiting ? styles.toastItemExiting : ''}`}
      style={toastStyle}
    >
      <TextDisplay text={message} fontSize="sm" fontWeight="strong" color={color || variant} />

      <div 
        className={styles.closeIcon}
        onClick={() => id && toastManager.removeToast(id)}
        role="button"
        aria-label="Close notification"
      >
        <Icon icon="ErrorTwoIcon" size={10} background="highlight" aria-hidden="true" />
      </div>
    </div>
  );
};

const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((toasts) => {
      setToasts([...toasts]);
    });

    return () => {
      unsubscribe();
      return; // Para evitar o erro de tipo
    };
  }, []);

  return (
    <div className={styles.toastContainerStyled} role="region" aria-label="Notifications">
      {toasts.map((toast) => (
        <ToastMessage key={toast?.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
