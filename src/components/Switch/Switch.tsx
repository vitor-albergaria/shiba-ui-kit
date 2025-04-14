import { ISwitch } from './Switch.types';
import React, { useEffect, useState } from 'react';
import styles from './Switch.module.css';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';

const Switch: React.FC<ISwitch> = ({
  isChecked = false,
  handleChange = () => {},
  size = 28,
  background = 'primary',
  isDisabled = false,
  isHidden = false,
}) => {
  const [switchIsChecked, setSwitchIsChecked] = useState(isChecked);

  const onSwitchValueChange = () => {
    if (isDisabled) return;

    const newCheckedState = !switchIsChecked;
    setSwitchIsChecked(newCheckedState);
    handleChange(newCheckedState);
  };

  const dynamicStyles = handleDynamicStyles({
    height: `${size}px`,
    width: `${size * 2}px`,
    background: !switchIsChecked ? 'highlight' : background,
    borderRadius: `${size / 2}px`,
  });

  useEffect(() => setSwitchIsChecked(isChecked), [isChecked]);

  if (isHidden) return null;

  return (
    <button
      type='button'
      role='switch'
      data-testid='switch'
      onClick={onSwitchValueChange}
      aria-checked={switchIsChecked}
      aria-disabled={isDisabled}
      data-checked={switchIsChecked}
      data-disabled={isDisabled}
      className={styles.container}
      style={dynamicStyles}
    >
      <div
        className={styles.circle}
        data-checked={switchIsChecked}
        data-disabled={isDisabled}
      />
    </button>
  );
};

export default Switch;
