export type SpacingType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IRating {
  rating?: number;
  maxStars?: number;
  readonly?: boolean;
  handleChange?: (rating: number) => void;
  size?: number;
  gap?: SpacingType;
  background?: string;
  isHidden?: boolean;
} 