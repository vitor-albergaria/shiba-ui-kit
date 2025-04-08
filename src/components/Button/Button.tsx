import styles from './Button.module.css';
import { IButton } from './Button.types';
import React, { Fragment, memo, useCallback } from 'react';
import { Icon } from '../Icon/Icon';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { Spinner } from '../Spinner/Spinner';
import { IconKeys } from '../Icon/Icon.types';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Button: React.FC<IButton> = memo(
  ({
    text = 'Button',
    onClick = () => {},
    isHidden = false,
    isLoading = false,
    isDisabled = false,
    leftIcon,
    rightIcon,
    rightIconSize = 14,
    leftIconSize = 14,
    rightIconColor = 'content',
    leftIconColor = 'content',
    background = 'primary',
    borderColor = 'primary',
    borderRadius = 8,
    borderWidth = 0,
    gap = '12px',
    padding = '8px 16px',
    height = 40,
    width,
    textColor = 'pureWhite',
  }) => {
    const handleClick = useCallback(() => {
      if (!isDisabled && !isLoading && onClick) onClick();
    }, [isDisabled, isLoading, onClick]);

    const renderIcon = useCallback(
      (icon: IconKeys, color: string, size: number) => (
        <Icon icon={icon} background={color} size={size} />
      ),
      []
    );

    const dynamicStyles = handleDynamicStyles({
      height: `${height}px`,
      width: width ? `${width}px` : '100%',
      background,
      borderColor,
      borderWidth: `${borderWidth}px`,
      borderRadius: `${borderRadius}px`,
      padding,
      gap,
    });

    const btnClasses = [styles.button].filter(Boolean).join(' ');

    if (isHidden) return null;

    return (
      <button
        role='button'
        type='button'
        aria-label={text}
        data-testid='button'
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        onClick={handleClick}
        disabled={isDisabled}
        style={dynamicStyles}
        className={btnClasses}
      >
        {isLoading ? (
          <Spinner size={height / 3} background={textColor} />
        ) : (
          <Fragment>
            {leftIcon && renderIcon(leftIcon, leftIconColor, leftIconSize)}
            {text && <TextDisplay text={text} color={textColor} />}
            {rightIcon && renderIcon(rightIcon, rightIconColor, rightIconSize)}
          </Fragment>
        )}
      </button>
    );
  }
);
