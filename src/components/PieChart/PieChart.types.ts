export interface IPieData {
  percent: number;
  color: string;
  label: string;
  onClick?: () => void;
}

export interface IPieChart {
  data: IPieData[];
  size?: number;
  isHidden?: boolean;
}
