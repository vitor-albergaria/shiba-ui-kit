import { Badge } from './Badge';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentText,
  testComponentClick,
  testComponentVisibility,
  testComponentIconRendering,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Badge', () => {
  testRenderingOfComponent({
    testId: 'badge',
    component: Badge,
    componentProperties: {},
  });

  testComponentText({
    testId: 'badge',
    component: Badge,
    componentProperties: { text: 'Click me' },
    expectedText: 'Click me',
  });

  testComponentClick({
    testId: 'badge',
    component: Badge,
    componentProperties: {},
    handler: () => console.log('clicked'),
  });

  testComponentStyleByProperties({
    testId: 'badge',
    component: Badge,
    propertiesToTest: {
      background: 'success',
      borderRadius: 32,
    },
    expectedResultingStyles: {
      background: 'var(--success)',
      'border-radius': '32px',
    },
  });

  testComponentVisibility({
    testId: 'badge',
    component: Badge,
    componentProperties: {},
  });

  testComponentIconRendering({
    component: Badge,
    componentProperties: { leftIcon: 'CardIcon' },
  });

  testComponentIconRendering({
    component: Badge,
    componentProperties: { rightIcon: 'BellIcon' },
  });

  testComponentAccessibility({
    testId: 'badge',
    component: Badge,
    componentProperties: { text: 'Test Badge' },
    expectedAttributes: {
      role: 'status',
      'aria-label': 'Test Badge',
    },
  });
});
