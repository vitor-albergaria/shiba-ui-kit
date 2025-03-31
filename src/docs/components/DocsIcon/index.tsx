import React from 'react';
import { t } from 'i18next';
import styles from './styles.module.css';

interface IDocsIcon {
  name: string;
  icon: {
    path: string[];
    view?: string;
  };
}

export const DocsIcon: React.FC<IDocsIcon> = ({ name, icon }) => {
  const handleClick = () => {
    alert(t('docs_copied'));
    navigator.clipboard.writeText(name);
  };

  return (
    <div className={styles.docIconWrapper} onClick={handleClick}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
        <path d={icon.path.join(' ')} fill='currentColor' />
      </svg>

      <p>{name}</p>
    </div>
  );
};
