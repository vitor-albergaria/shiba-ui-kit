import * as iconList from '../../assets/icons';

export enum DefaultIconValues {
  Size = '20',
  ViewBox = '0 0 20 20',
  Color = 'primary',
  Icon = 'ForwardIcon',
}

export interface IIcon {
  icon?: IconKeys;
  size?: number;
  background?: string;
  isHidden?: boolean;
}

export interface IIconList {
  path: string[];
  view?: string;
}

export type IconKeys = keyof typeof iconList;
