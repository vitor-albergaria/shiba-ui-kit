import React from 'react';
import styles from './styles.module.css';

interface IDocsSpacing {
  name: string;
  value: string;
}

export const DocsSpacing: React.FC<IDocsSpacing> = ({ name, value }) => {
  if (name === 'rm') return null;

  return (
    <div className={styles.docSpacingWrapper}>
      <p>{name}</p>
      <div 
        className={styles.spaceIndicator} 
        style={{ height: value }}
      />
    </div>
  );
};
