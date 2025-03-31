import styles from './styles.module.css';
import React, { useState } from 'react';
import i18n, { t } from 'i18next';

const LANGUAGES = ['pt', 'en'];
const THEMES = ['light', 'dark', 'ocean'];

export const SettingsOptions: React.FC = () => {
  const initialLanguage = i18n.language;
  const initialTheme = localStorage.getItem('theme') || 'light';

  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
  const handleSelectLanguage = (locale: string) => setSelectedLanguage(locale);

  const [selectedTheme, setSelectedTheme] = useState(initialTheme);
  const handleSelectTheme = (theme: string) => setSelectedTheme(theme);

  const handleSettingsChanges = () => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('theme', selectedTheme);
    window.location.reload();
  };

  return (
    <div className={styles.columnWrapper}>
      <span className={styles.label}>{t('settings_language')}</span>

      <div className={styles.optionsLine}>
        {LANGUAGES.map((language) => (
          <div
            key={language}
            className={`${styles.optionBox} ${language === selectedLanguage ? styles.selected : ''}`}
            onClick={() => handleSelectLanguage(language)}
          >
            {language.toUpperCase()}
          </div>
        ))}
      </div>

      <span className={styles.label}>{t('settings_theme')}</span>

      <div className={styles.optionsLine}>
        {THEMES.map((theme) => (
          <div
            key={theme}
            className={`${styles.optionBox} ${theme === selectedTheme ? styles.selected : ''}`}
            onClick={() => handleSelectTheme(theme)}
          >
            {theme.toUpperCase()}
          </div>
        ))}
      </div>

      <button className={styles.settingsButton} onClick={handleSettingsChanges}>
        {t('settings_confirm')}
      </button>
    </div>
  );
};
