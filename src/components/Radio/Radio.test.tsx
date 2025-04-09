import { Radio } from './Radio';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentVisibility,
  testComponentDisabledBehavior,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Radio', () => {
  testRenderingOfComponent({
    testId: 'radio',
    component: Radio,
    componentProperties: {},
  });

  testComponentStyleByProperties({
    testId: 'radio',
    component: Radio,
    propertiesToTest: { size: 50, background: 'error' },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
    },
  });

  testComponentVisibility({
    testId: 'radio',
    component: Radio,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'radio',
    component: Radio,
  });

  testComponentAccessibility({
    testId: 'radio',
    component: Radio,
    componentProperties: {},
    expectedAttributes: {
      role: 'radio',
      'aria-checked': 'false',
      'aria-disabled': 'false',
    },
  });
});
