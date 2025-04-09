import React from 'react';
import { ISkeleton } from './Skeleton.types';
import styles from './Skeleton.module.css';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Skeleton: React.FC<ISkeleton> = ({
  height = 50,
  width = 50,
  borderRadius = '8',
  background = 'highlight',
  isFullSize = false,
  isHidden = false,
}) => {
  if (isHidden) return null;

  const dynamicStyles = handleDynamicStyles({
    width: isFullSize ? '100%' : `${width}px`,
    height: isFullSize ? '100%' : `${height}px`,
    background,
    borderRadius: `${borderRadius}px`,
  });

  return (
    <div
      role='progressbar'
      aria-label='Loading content'
      aria-busy='true'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      data-testid='skeleton'
      className={styles.skeleton}
      style={dynamicStyles}
    />
  );
};
