import React, { useState } from 'react';
import { IRating } from './Rating.types';
import styles from './Rating.module.css';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Rating: React.FC<IRating> = ({
  rating = 0,
  maxStars = 5,
  readonly = false,
  handleChange = () => {},
  size = 30,
  gap = '12px',
  background = 'warning',
  isHidden = false,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const currentValue = hoverValue ?? selectedValue ?? rating ?? 0;

  const handleStarClick = (position: number) => {
    if (readonly) return;
    setSelectedValue(position);
    handleChange?.(position);
  };

  const handleMouseEnter = (position: number) => {
    if (readonly) return;
    setHoverValue(position);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverValue(null);
  };

  const renderStar = (position: number) => {
    const fillPercentage = Math.max(
      0,
      Math.min(
        100,
        currentValue >= position
          ? 100
          : currentValue > position - 1
          ? (currentValue - (position - 1)) * 100
          : 0
      )
    );

    const starBaseStyle = handleDynamicStyles({
      fontSize: `${size}px`,
    });

    const starFillStyle = handleDynamicStyles({
      fontSize: `${size}px`,
      color: background,
    });

    const customStarFillStyle = {
      ...starFillStyle,
      width: `${fillPercentage}%`,
    };

    return (
      <div
        key={position}
        className={`${styles.starContainer} ${
          !readonly ? styles.interactive : ''
        }`}
        onMouseLeave={handleMouseLeave}
        style={{ fontSize: `${size}px` }}
        role='radio'
        aria-checked={currentValue >= position}
        aria-label={`${position} star${position === 1 ? '' : 's'}`}
      >
        {!readonly && (
          <div
            className={styles.clickArea}
            onMouseEnter={() => handleMouseEnter(position)}
            onClick={() => handleStarClick(position)}
          />
        )}

        <div
          className={styles.starBase}
          aria-hidden='true'
          style={starBaseStyle}
        >
          ★
        </div>

        <div
          className={styles.starFill}
          aria-hidden='true'
          style={customStarFillStyle}
        >
          ★
        </div>
      </div>
    );
  };

  const stars = Array.from({ length: maxStars }, (_, i) => renderStar(i + 1));

  const starContainerStyle = handleDynamicStyles({
    gap,
  });

  if (isHidden) return null;

  return (
    <div
      className={styles.ratingContainer}
      data-testid='rating'
      role='radiogroup'
      aria-label={`Rating: ${currentValue} out of ${maxStars} stars`}
      style={starContainerStyle}
    >
      {stars}
    </div>
  );
};

export default Rating;
