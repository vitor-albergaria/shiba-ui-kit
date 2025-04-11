import React from 'react';
import styles from './Timeline.module.css';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { ITimeline } from './Timeline.types';

export const Timeline: React.FC<ITimeline> = ({ data = [], isHidden = false }) => {
  if (isHidden) return null;

  return (
    <div
      className={styles.timelineContainer}
      data-testid="timeline"
      role="list"
      aria-label="Timeline"
    >
      {data.map((item) => (
        <div className={styles.timelineItem} key={item?.id} role="listitem">
          <div className={styles.timelineMarker} aria-hidden="true">
            <div className={styles.timelineCircle} />
            <div className={styles.timelineLine} />
          </div>

          <div className={styles.timelineContent}>
            <div className={styles.timelineHeader}>
              <TextDisplay text={item?.title} fontWeight="bold" />

              <TextDisplay
                text={item?.subtitle}
                fontSize="sm"
                color="accent"
                fontWeight="bold"
              />
            </div>

            <div className={styles.timelineDetails} role="list" aria-label="Details">
              {item?.details?.map((topic, index) => (
                <div className={styles.detailItem} key={index} role="listitem">
                  <TextDisplay text="•" aria-hidden="true" />
                  <TextDisplay text={topic} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 