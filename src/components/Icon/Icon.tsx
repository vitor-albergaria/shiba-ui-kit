import React from 'react';
import * as iconList from '../../assets/icons/index';
import { DefaultIconValues, IconKeys, IIcon } from './Icon.types';
import { getThemeColor } from '../../theme/helpers/getTheme';

export const Icon: React.FC<IIcon> = ({
  icon = DefaultIconValues.Icon,
  size = DefaultIconValues.Size,
  background = 'primary',
  isHidden = false,
}) => {
  if (isHidden) return null;

  const { path = [], view = DefaultIconValues.ViewBox } =
    iconList[icon as IconKeys] || {};

  return (
    <svg
      role='img'
      aria-label={icon}
      aria-hidden='true'
      data-testid='icon'
      width={`${size}px`}
      height={`${size}px`}
      viewBox={view}
    >
      {path.map((data: string, index: number) => (
        <path key={index} d={data} fill={getThemeColor(background)} />
      ))}
    </svg>
  );
};
