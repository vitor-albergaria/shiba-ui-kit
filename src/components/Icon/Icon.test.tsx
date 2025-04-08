import { Icon } from './Icon';
import {
  testRenderingOfComponent,
  testComponentVisibility,
  testComponentAccessibility,
  testComponentStyleByProperties,
} from '../../testing/functions';

describe('UI Component: Icon', () => {
  testRenderingOfComponent({
    testId: 'icon',
    component: Icon,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'icon',
    component: Icon,
    propertiesToTest: { size: 20, background: 'primary' },
    expectedResultingStyles: {
      background: 'var(--primary)',
    },
  });

  testComponentVisibility({
    testId: 'icon',
    component: Icon,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'icon',
    component: Icon,
    componentProperties: { icon: 'BellIcon' },
    expectedAttributes: {
      role: 'img',
      'aria-label': 'BellIcon',
    },
  });
});
