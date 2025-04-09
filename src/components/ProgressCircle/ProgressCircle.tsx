import React, { useCallback } from 'react';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { IProgressCircle } from './ProgressCircle.types';
import styles from './ProgressCircle.module.css';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';
import { getThemeColor } from '../../theme/helpers/getTheme';

export const ProgressCircle: React.FC<IProgressCircle> = ({
  progressValue = 0,
  background = 'primary',
  size = 60,
  isHidden = false,
}) => {
  const clampValue = useCallback(
    (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max),
    []
  );

  const circleProgressValue = clampValue(progressValue, 0, 100);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circleProgressValue / 100) * circumference;

  function getSize() {
    if (size > 100) return 'lg';
    if (size > 80) return 'md';
    if (size > 60) return 'sm';
    return 'xs';
  }

  const dynamicStyles = handleDynamicStyles({
    height: `${size}px`,
    width: `${size}px`,
  });

  if (isHidden) return null;

  return (
    <div
      className={styles.circleContainer}
      data-testid='progress-circle'
      role='progressbar'
      aria-valuenow={circleProgressValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${circleProgressValue}%`}
      style={dynamicStyles}
    >
      <svg className={styles.svg} viewBox='0 0 80 80' aria-hidden='true'>
        <circle
          className={styles.circleBase}
          cx='40'
          cy='40'
          r={radius}
          strokeWidth='8'
          data-testid='progress-circle-base'
        />
        <circle
          className={styles.circleRange}
          cx='40'
          cy='40'
          r={radius}
          strokeWidth='8'
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          data-testid='progress-circle-range'
          stroke={getThemeColor(background)}
        />
      </svg>

      <div className={styles.progressValue} aria-hidden='true'>
        <TextDisplay
          text={`${circleProgressValue}%`}
          fontWeight='strong'
          fontSize={getSize()}
        />
      </div>
    </div>
  );
};
