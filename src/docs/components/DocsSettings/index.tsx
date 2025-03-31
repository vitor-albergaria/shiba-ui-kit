import styles from './styles.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { SettingsIcon } from '../../../../src/assets/icons';
import { SettingsOptions } from './SettingsOptions';

const SettingsIconSVG: React.FC = () => (
  <svg width='18' height='18' viewBox='0 0 20 20' fill='none'>
    <path d={SettingsIcon.path.join(' ')} fill='#F5F5FB' />
  </svg>
);

export const DocsSettings: React.FC<DocsContainerProps> = (props) => {
  const settingsRef = useRef<HTMLDivElement>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsTooltipVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className={styles.rowWrapper}>
        <div ref={settingsRef}>
          <div
            className={styles.iconWrapper}
            onClick={() => setIsTooltipVisible(!isTooltipVisible)}
          >
            <div className={styles.styledIcon}>
              <SettingsIconSVG />
            </div>
          </div>

          <div
            className={`${styles.tooltip} ${
              isTooltipVisible ? styles.visible : ''
            }`}
          >
            <SettingsOptions />
          </div>
        </div>
      </div>

      <DocsContainer {...props} />
    </>
  );
};
