import { IRadio } from './Radio.types';
import styles from './Radio.module.css';
import React, { useState, useEffect } from 'react';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

export const Radio: React.FC<IRadio> = ({
  isSelected = false,
  handleChange = () => {},
  size = 28,
  background = 'primary',
  isDisabled = false,
  isHidden = false,
}) => {
  const [radioIsSelected, setRadioIsSelected] = useState(isSelected);

  const onRadioChange = () => {
    if (isDisabled) return;
    const newSelectedState = !radioIsSelected;

    setRadioIsSelected(newSelectedState);
    handleChange(newSelectedState);
  };

  const dynamicStyles = handleDynamicStyles({
    width: `${size}px`,
    height: `${size}px`,
    borderColor: radioIsSelected ? background : 'highlight',
  });

  const innerStyles = handleDynamicStyles({
    width: `${size * 0.5}px`,
    height: `${size * 0.5}px`,
    background: radioIsSelected ? background : 'highlight',
  });

  useEffect(() => setRadioIsSelected(isSelected), [isSelected]);

  if (isHidden) return null;

  return (
    <button
      type="button"
      role="radio"
      data-testid="radio"
      onClick={onRadioChange}
      aria-checked={radioIsSelected}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={styles.radio}
      style={dynamicStyles}
    >
      {radioIsSelected && <div className={styles.inner} style={innerStyles} />}
    </button>
  );
};
