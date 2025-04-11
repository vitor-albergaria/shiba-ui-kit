import React, { useState } from 'react';
import { ITooltip } from './Tooltip.types';
import styles from './Tooltip.module.css';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Tooltip: React.FC<ITooltip> = ({
  children,
  content = '-',
  position = 'top',
  background = 'primary',
  color = 'pureWhite',
  isHidden = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const showTooltip = () => {
    if (isHidden) return;
    timeoutId = setTimeout(() => setIsVisible(true), 200);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  const getPositionClass = () => {
    switch (position) {
      case 'top':
        return styles.positionTop;
      case 'bottom':
        return styles.positionBottom;
      case 'left':
        return styles.positionLeft;
      case 'right':
        return styles.positionRight;
      default:
        return styles.positionTop;
    }
  };

  const getArrowPositionClass = () => {
    switch (position) {
      case 'top':
        return styles.positionTopArrow;
      case 'bottom':
        return styles.positionBottomArrow;
      case 'left':
        return styles.positionLeftArrow;
      case 'right':
        return styles.positionRightArrow;
      default:
        return styles.positionTopArrow;
    }
  };

  const tooltipStyle = handleDynamicStyles({
    background,
  });

  const arrowStyle = handleDynamicStyles({
    background,
  });

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      role='none'
    >
      <div aria-describedby='tooltip' tabIndex={0}>
        {children}
      </div>

      <div
        id='tooltip'
        role='tooltip'
        aria-hidden={!isVisible}
        data-testid='tooltip'
        className={`${styles.tooltipContainer} ${getPositionClass()} ${
          isVisible ? styles.tooltipVisible : ''
        }`}
        style={tooltipStyle}
      >
        <TextDisplay color={color} text={content} />
        <div
          className={`${styles.arrow} ${getArrowPositionClass()}`}
          style={arrowStyle}
          aria-hidden='true'
        />
      </div>
    </div>
  );
};
