export interface ITooltip {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';

  background?: string;
  color?: string;
  isHidden?: boolean;
}

export interface ITooltipContainer {
  $position: ITooltip['position'];
  $background?: string;
  $isHidden: boolean;
}
