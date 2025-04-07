import { TextDisplay } from './TextDisplay';

import {
  testComponentAccessibility,
  testComponentStyleByProperties,
  testComponentText,
  testComponentVisibility,
  testRenderingOfComponent,
} from '../../testing/functions';

describe('Component: TextDisplay', () => {
  testRenderingOfComponent({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Test Text' },
  });

  testComponentText({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Helloooooo!' },
    expectedText: 'Helloooooo!',
  });

  testComponentStyleByProperties({
    testId: 'text-display',
    component: TextDisplay,
    propertiesToTest: {
      text: 'Test Text',
      color: 'red',
      fontSize: '5x',
      fontWeight: 'heavy',
      textAlign: 'right',
      lineHeight: '10px',
      letterSpacing: '1px',
      textDecoration: 'underline',
    },
    expectedResultingStyles: {
      color: 'red',
      'font-size': 'var(--5x)',
      'font-weight': 'var(--heavy)',
      'text-align': 'right',
      'line-height': '10px',
      'letter-spacing': '1px',
      'text-decoration': 'underline',
    },
  });

  testComponentVisibility({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'text-display',
    component: TextDisplay,
    componentProperties: { text: 'Test Text' },
    expectedAttributes: {
      role: 'text',
    },
  });
});
