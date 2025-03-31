import React from 'react';
import styles from './styles.module.css';

export const CenterContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.centerContainer}>{children}</div>;
};
