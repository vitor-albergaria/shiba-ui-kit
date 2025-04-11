import styles from './PieChart.module.css';
import { IPieChart } from './PieChart.types';
import React, { useMemo, useState } from 'react';
import { handleDynamicStyles } from '../../theme/helpers/handleDinamicStyles';
import { getThemeColor } from '../../theme/helpers/getTheme';

export const PieChart: React.FC<IPieChart> = ({
  data = [],
  size = 120,
  isHidden = false,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const calculateCoordinates = (
    percent: number,
    radius: number,
    startAngle: number
  ) => {
    const angle = (percent * 360 * Math.PI) / 18000;
    const x = radius * Math.cos(startAngle + angle);
    const y = radius * Math.sin(startAngle + angle);

    return { x, y };
  };

  const validatedData = useMemo(() => {
    const total = data.reduce((sum, item) => sum + item.percent, 0);

    if (total !== 100) {
      return data.map((item) => ({
        ...item,
        percent: (item.percent / total) * 100,
      }));
    }

    return data;
  }, [data]);

  const radius = size / 2 - 10;
  const centerX = size / 2;
  const centerY = size / 2;

  let startAngle = -Math.PI / 2;

  const paths = validatedData.map((slice, index) => {
    const { percent, color, onClick } = slice;
    const largeArcFlag = percent > 50 ? 1 : 0;
    const end = calculateCoordinates(percent, radius, startAngle);

    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${centerX + radius * Math.cos(startAngle)} ${
        centerY + radius * Math.sin(startAngle)
      }`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + end.x} ${
        centerY + end.y
      }`,
      'Z',
    ].join(' ');

    startAngle += (percent * 2 * Math.PI) / 100;

    return (
      <path
        onClick={onClick}
        key={index}
        d={pathData}
        fill={getThemeColor(color)}
        className={`${styles.slice} ${
          activeIndex === index ? styles.sliceActive : ''
        }`}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      />
    );
  });

  if (isHidden) return null;

  const chartContainerStyle = handleDynamicStyles({
    width: `${size}px`,
    height: `${size}px`,
  });

  return (
    <div className={styles.container} role='figure' aria-label='Pie Chart'>
      <div
        className={styles.chartContainer}
        data-testid='pie-chart'
        style={chartContainerStyle}
        role='img'
        aria-label={`Chart showing: ${validatedData
          .map((item) => `${item.label} ${item.percent.toFixed(1)}%`)
          .join(', ')}`}
      >
        <svg
          className={styles.svg}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden='true'
        >
          {paths}
        </svg>
      </div>
    </div>
  );
};
