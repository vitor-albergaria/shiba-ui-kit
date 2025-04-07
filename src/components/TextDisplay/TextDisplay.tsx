import React from 'react';
import styles from './TextDisplay.module.css';
import { ITextDisplay } from './TextDisplay.types';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const TextDisplay: React.FC<ITextDisplay> = ({
  text = '-',
  fontSize = 'md',
  fontWeight = 'regular',
  color = 'content',
  textAlign = 'left',
  textDecoration = 'none',
  lineHeight = undefined,
  letterSpacing = undefined,
  isHidden = false,
}) => {
  if (isHidden) return null;

  const dynamicStyles = handleDynamicStyles({
    color,
    fontSize,
    fontWeight,
    textAlign,
    textDecoration,
    lineHeight,
    letterSpacing,
  });

  return (
    <span
      role='text'
      aria-label={text}
      data-testid='text-display'
      className={styles.textWrapper}
      style={dynamicStyles}
    >
      {text}
    </span>
  );
};

