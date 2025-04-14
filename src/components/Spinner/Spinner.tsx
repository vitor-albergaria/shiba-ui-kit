import React from 'react';
import styles from './Spinner.module.css';
import { ISpinner } from './Spinner.types';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';
import { getThemeColor } from '../../theme/helpers/getTheme';

export const Spinner: React.FC<ISpinner> = ({
  size = 20,
  background = 'primary',
  isHidden = false,
}) => {
  if (isHidden) return null;

  const dynamicStyles = handleDynamicStyles({
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${size / 5}px`,
  });

  return (
    <div
      role='status'
      aria-label='Loading'
      aria-busy='true'
      data-testid='spinner'
      className={styles.spinner}
      style={{
        ...dynamicStyles,
        borderTopColor: getThemeColor(background),
        borderRightColor: getThemeColor(background),
      }}
    />
  );
};
