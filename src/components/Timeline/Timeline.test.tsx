import { Timeline } from './Timeline';

import {
  testRenderingOfComponent,
  testComponentVisibility,
} from '../../testing/functions';

describe('UI Component: Timeline', () => {
  const mockTimelineData = [
    {
      id: 1,
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      details: ['Detail 1', 'Detail 2'],
    },
  ];

  testRenderingOfComponent({
    testId: 'timeline',
    component: Timeline,
    componentProperties: { data: mockTimelineData },
  });

  testComponentVisibility({
    testId: 'timeline',
    component: Timeline,
    componentProperties: { data: mockTimelineData },
  });
});
