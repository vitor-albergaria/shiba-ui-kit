import React from 'react';
import { t } from 'i18next';

export const DocsTitle: React.FC<{ text: string }> = ({ text }) => {
  const title = t(text) || 'TITLE';

  return <h2>{title}</h2>;
};

export const DocsDescription: React.FC<{ text: string }> = ({ text }) => {
  const description = t(text) || 'DESCRIPTION';

  return <h6>{description}</h6>;
};
