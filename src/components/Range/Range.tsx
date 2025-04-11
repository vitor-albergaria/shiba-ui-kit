import { IRange } from './Range.types';
import styles from './Range.module.css';
import React, { useState, ChangeEvent } from 'react';
import { getThemeColor } from '../../theme/helpers/getTheme';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Range: React.FC<IRange> = ({
  value = 0,
  handleChange = () => {},
  background = 'primary',
  height = 8,
  width = 200,
  isFullWidth = false,
  isHidden = false,
}) => {
  const [rangeValue, setRangeValue] = useState<number>(value);
  const percentage = ((rangeValue - 0) / (100 - 0)) * 100;

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number(e.target.value);
    setRangeValue(parsedValue);
    handleChange(parsedValue);
  };

  if (isHidden) return null;

  const dynamicStyle = handleDynamicStyles({
    width: isFullWidth ? '100%' : `${width}px`,
    height: `${height}px`,
    background: `linear-gradient(to right, ${getThemeColor(
      background
    )} ${percentage}%, var(--highlight) ${percentage}%)`,
  });

  const customStyle = {
    ...dynamicStyle,
    '--inputHeight': `${height}px`,
  } as React.CSSProperties;

  return (
    <input
      data-testid='range'
      type='range'
      role='slider'
      aria-valuenow={rangeValue}
      aria-valuetext={`${rangeValue}%`}
      aria-orientation='horizontal'
      value={rangeValue}
      onChange={handleRangeChange}
      className={styles.inputRange}
      style={customStyle}
    />
  );
};

export default Range;
