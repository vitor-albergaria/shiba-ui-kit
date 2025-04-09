import { ICheckbox } from './types';
import styles from './Checkbox.module.css';
import React, { useState, useEffect } from 'react';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';
import { Icon } from '../Icon/Icon';

export const Checkbox: React.FC<ICheckbox> = ({
  isChecked = false,
  handleChange = () => {},
  size = 28,
  background = 'primary',
  icon = 'SuccessTwoIcon',
  isDisabled = false,
  isHidden = false,
  iconColor = 'pureWhite',
}) => {
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(isChecked);

  const onCheckboxChange = () => {
    if (isDisabled) return;
    const newCheckedState = !checkboxIsChecked;

    setCheckboxIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  const dynamicStyles = handleDynamicStyles({
    width: `${size}px`,
    height: `${size}px`,
    background: checkboxIsChecked ? background : 'transparent',
    borderColor: checkboxIsChecked ? background : 'highlight',
  });

  useEffect(() => setCheckboxIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <button
      type='button'
      role='checkbox'
      data-testid='checkbox'
      onClick={onCheckboxChange}
      aria-checked={checkboxIsChecked}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      className={styles.box}
      style={dynamicStyles}
    >
      {checkboxIsChecked && (
        <div className={styles.tick}>
          <Icon
            icon={icon}
            background={iconColor}
            size={size / 1.75}
          />
        </div>
      )}
    </button>
  );
};
