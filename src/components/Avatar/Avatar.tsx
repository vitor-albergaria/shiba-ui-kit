import styles from './Avatar.module.css';
import { IAvatar } from './Avatar.types';
import React, { useState } from 'react';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { Skeleton } from '../Skeleton/Skeleton';

export const Avatar: React.FC<IAvatar> = ({
  username,
  image,
  size = 50,
  background = 'primary',
  textColor = 'pureWhite',
  isHidden,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const getNameInitials = (name: string = 'User') => {
    const [first = '', second = ''] = name.trim().split(' ');
    return (first[0] || '') + (second[0] || '');
  };

  const getSize = () => {
    if (size >= 100) return '4x';
    if (size > 80) return '2x';
    if (size > 60) return 'lg';
    if (size > 40) return 'md';

    return 'sm';
  };

  const dynamicStyles = handleDynamicStyles({
    width: `${size}px`,
    height: `${size}px`,
    background,
    borderRadius: '50%',
  });

  const formattedUserName = getNameInitials(username);

  if (isHidden) return null;

  if (!image) {
    return (
      <div
        role='img'
        aria-label={username || 'User avatar'}
        data-testid='avatar-text'
        data-size={getSize()}
        data-background={background}
        className={styles.container}
        style={dynamicStyles}
      >
        <TextDisplay
          text={formattedUserName}
          color={textColor}
          fontSize={getSize()}
          fontWeight='strong'
        />
      </div>
    );
  }

  return (
    <div>
      {isLoading && <Skeleton width={size} height={size} borderRadius={50} />}

      <img
        role='img'
        data-testid='avatar-image'
        src={image}
        alt={username || 'User avatar'}
        className={styles.avatarImage}
        style={dynamicStyles}
        aria-hidden={isLoading}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
