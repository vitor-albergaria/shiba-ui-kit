import React from 'react';
import styles from './Badge.module.css';
import { IBadge } from './Badge.types';
import { IconKeys } from '../Icon/Icon.types';
import { Icon } from '../Icon/Icon';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Badge: React.FC<IBadge> = ({
  text = 'Shiba UI',
  background = 'primary',
  borderRadius = 8,
  color = 'pureWhite',
  leftIcon = null,
  rightIcon = null,
  isHidden = false,
  onClick = () => {},
}) => {
  if (isHidden) return null;

  const renderIcon = (icon: IconKeys) => (
    <Icon icon={icon} background={color} size={14} />
  );

  const dynamicStyles = handleDynamicStyles({
    background,
    borderRadius: `${borderRadius}px`,
  });

  return (
    <div
      role='status'
      data-testid='badge'
      aria-label={text}
      onClick={onClick}
      className={styles.badge}
      style={dynamicStyles}
    >
      {leftIcon && renderIcon(leftIcon)}
      <TextDisplay text={text} color={color} fontWeight='medium' />
      {rightIcon && renderIcon(rightIcon)}
    </div>
  );
};
