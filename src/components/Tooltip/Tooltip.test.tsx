import {Tooltip} from './Tooltip';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Tooltip', () => {
  testRenderingOfComponent({
    testId: 'tooltip',
    component: Tooltip,
    componentProperties: { children: <p>Hello</p>, content: 'Test Tooltip' },
  });

  testComponentStyleByProperties({
    testId: 'tooltip',
    component: Tooltip,
    propertiesToTest: {
      children: <p>Hello</p>,
      content: 'Test Tooltip',
      background: 'warning',
    },
    expectedResultingStyles: {
      background: 'var(--warning)',
    },
  });

  testComponentAccessibility({
    testId: 'tooltip',
    component: Tooltip,
    componentProperties: {
      children: <p>Hello</p>,
      content: 'Test Tooltip',
    },
    expectedAttributes: {
      role: 'tooltip',
      'aria-hidden': 'true',
      id: 'tooltip',
    },
  });
});
