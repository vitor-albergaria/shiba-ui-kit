import { IHeader } from './Header.types';
import styles from './Header.module.css';
import React, { useState } from 'react';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { Icon } from '../Icon/Icon';

export const Header: React.FC<IHeader> = ({
  logo = 'Shiba UI',
  menuItems = [],
  isHidden = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState<number>(1);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleOptionClick = (
    id: number,
    label: string,
    isInactive?: boolean,
    handleClick?: (label: string) => void
  ) => {
    if (!isInactive) setActiveOption(id);
    if (handleClick) handleClick(label);
    setIsMenuOpen(false);
  };

  const renderMenuItems = () =>
    menuItems?.map(({ id = 0, label, handleClick, isInactive }) => (
      <div
        key={id}
        role='menuitem'
        tabIndex={0}
        aria-current={activeOption === id ? 'page' : undefined}
        aria-disabled={isInactive}
        className={`${styles.headerOption} ${
          activeOption === id ? styles.headerOptionActive : ''
        }`}
        onClick={() => handleOptionClick(id, label, isInactive, handleClick)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleOptionClick(id, label, isInactive, handleClick);
          }
        }}
      >
        <TextDisplay text={label} fontSize='lg' fontWeight='strong' />
      </div>
    ));

  if (isHidden) return null;

  return (
    <header
      className={styles.headerContainer}
      data-testid='header'
      role='menubar'
    >
      <div className={styles.logoWrapper}>
        <TextDisplay text={logo} fontSize='3x' fontWeight='bold' />
      </div>

      <div className={styles.headerOptionsWrapper} aria-label='Main navigation'>
        {renderMenuItems()}
      </div>

      <div
        className={styles.menuIconWrapper}
        onClick={toggleMenu}
        role='button'
        aria-label='Toggle menu'
        aria-expanded={isMenuOpen}
        tabIndex={0}
      >
        <Icon
          icon='MenuIcon'
          background='content'
          size={20}
          aria-hidden='true'
        />
      </div>

      <div
        className={`${styles.fullScreenMenu} ${
          isMenuOpen ? styles.fullScreenMenuOpen : ''
        }`}
        role='menu'
        aria-hidden={!isMenuOpen}
      >
        <div
          className={styles.closeIcon}
          onClick={toggleMenu}
          role='button'
          aria-label='Close menu'
          tabIndex={0}
        >
          <Icon
            icon='ErrorTwoIcon'
            background='content'
            size={16}
            aria-hidden='true'
          />
        </div>
        {renderMenuItems()}
      </div>
    </header>
  );
};