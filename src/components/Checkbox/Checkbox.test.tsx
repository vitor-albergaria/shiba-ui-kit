import { Checkbox } from './Checkbox';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Checkbox', () => {
  testRenderingOfComponent({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'checkbox',
    component: Checkbox,
    propertiesToTest: { size: 50, background: 'error' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
    },
  });

  testComponentVisibility({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'checkbox',
    component: Checkbox,
  });

  testComponentAccessibility({
    testId: 'checkbox',
    component: Checkbox,
    componentProperties: {},
    expectedAttributes: {
      role: 'checkbox',
      'aria-checked': 'false',
      'aria-disabled': 'false',
    },
  });
});
