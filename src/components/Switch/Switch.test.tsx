import { Switch } from './Switch';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Switch', () => {
  testRenderingOfComponent({
    testId: 'switch',
    component: Switch,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'switch',
    component: Switch,
    propertiesToTest: { size: 50 },
    expectedResultingStyles: {
      width: '100px',
      height: '50px',
    },
  });

  testComponentVisibility({
    testId: 'switch',
    component: Switch,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'switch',
    component: Switch,
  });

  testComponentAccessibility({
    testId: 'switch',
    component: Switch,
    componentProperties: {},
    expectedAttributes: {
      role: 'switch',
      'aria-checked': 'false',
      'aria-disabled': 'false',
    },
  });
});
