import React from 'react';
import styles from './Spinner.module.css';
import { ISpinner } from './Spinner.types';

export const Spinner: React.FC<ISpinner> = ({
  size = 20,
  background = 'primary',
  isHidden = false,
}) => {
  if (isHidden) return null;

  return (
    <div
      role='status'
      aria-label='Loading'
      aria-busy='true'
      data-testid='spinner'
      className={styles.spinner}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 5}px`,
        borderTopColor: `var(--${background})`,
        borderRightColor: `var(--${background})`,
      }}
    />
  );
};
