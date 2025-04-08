import { Spinner } from './Spinner';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Spinner', () => {
  testRenderingOfComponent({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'spinner',
    component: Spinner,
    propertiesToTest: { size: 50, background: 'error' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
      'border-top-color': 'var(--error)',
      'border-right-color': 'var(--error)',
    },
  });

  testComponentVisibility({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'spinner',
    component: Spinner,
    componentProperties: {},
    expectedAttributes: {
      role: 'status',
      'aria-label': 'Loading',
      'aria-busy': 'true',
    },
  });
});
