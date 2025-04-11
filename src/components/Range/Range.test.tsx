import { Range } from './Range';
import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentAttributes,
  testComponentVisibility,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Range', () => {
  testRenderingOfComponent({
    testId: 'range',
    component: Range,
    componentProperties: { value: 0 },
  });

  testComponentAttributes({
    testId: 'range',
    component: Range,
    componentProperties: { value: 35 },
    expectedAttributes: {
      value: '35',
    },
  });

  testComponentStyleByProperties({
    testId: 'range',
    component: Range,
    propertiesToTest: {
      value: 0,
      width: 50,
      height: 50,
    },
    expectedResultingStyles: {
      width: '50px',
      height: '50px',
    },
  });

  testComponentStyleByProperties({
    testId: 'range',
    component: Range,
    propertiesToTest: {
      value: 0,
      isFullWidth: true,
    },
    expectedResultingStyles: {
      width: '100%',
    },
  });

  testComponentVisibility({
    testId: 'range',
    component: Range,
    componentProperties: { value: 0 },
  });

  testComponentAccessibility({
    testId: 'range',
    component: Range,
    componentProperties: { value: 50 },
    expectedAttributes: {
      role: 'slider',
      'aria-valuenow': '50',
      'aria-valuetext': '50%',
      'aria-orientation': 'horizontal',
    },
  });
});
