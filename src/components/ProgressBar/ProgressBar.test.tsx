import { ProgressBar } from './ProgressBar';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: ProgressBar', () => {
  testRenderingOfComponent({
    testId: 'progress-bar',
    component: ProgressBar,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'progress-bar-inner',
    component: ProgressBar,
    propertiesToTest: { progressValue: 50 },
    expectedResultingStyles: {
      width: '50%',
    },
  });

  testComponentVisibility({
    testId: 'progress-bar',
    component: ProgressBar,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'progress-bar',
    component: ProgressBar,
    componentProperties: { progressValue: 75 },
    expectedAttributes: {
      role: 'progressbar',
      'aria-valuenow': '75',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      'aria-label': 'Progress: 75%',
    },
  });
});
