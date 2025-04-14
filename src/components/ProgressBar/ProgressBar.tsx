import React, { useCallback } from 'react';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { IProgressBar } from './ProgressBar.types';
import styles from './ProgressBar.module.css';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';
import { getThemeColor } from '../../theme/helpers/getTheme';

export const ProgressBar: React.FC<IProgressBar> = ({
  progressValue = 0,
  background = 'primary',
  height = 12,
  width = 200,
  isHidden = false,
  hideLabel = false,
  isFullWidth = false,
}) => {
  const clampValue = useCallback(
    (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max),
    []
  );

  const barProgressValue = clampValue(progressValue, 0, 100);

  const barContainerStyles = handleDynamicStyles({
    width: isFullWidth ? '100%' : `${width}px`,
  });

  const barOuterStyles = handleDynamicStyles({
    height: `${height}px`,
    width: isFullWidth ? '100%' : `${width}px`,
  });

  const barInnerStyles = handleDynamicStyles({
    width: `${barProgressValue}%`,
    background: getThemeColor(background),
  });

  if (isHidden) return null;

  return (
    <div
      className={styles.barContainer}
      data-testid='progress-bar'
      role='progressbar'
      aria-valuenow={barProgressValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress: ${barProgressValue}%`}
      style={barContainerStyles}
    >
      <div
        className={styles.barOuter}
        style={barOuterStyles}
        data-testid='progress-bar-outer'
      >
        <div
          className={styles.barInner}
          style={barInnerStyles}
          data-testid='progress-bar-inner'
        />
      </div>

      {!hideLabel && (
        <div aria-hidden='true' className={styles.textContainer}>
          <TextDisplay text={`${barProgressValue}%`} fontSize='sm' />
        </div>
      )}
    </div>
  );
};
