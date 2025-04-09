import { Button } from './Button';

import {
  testRenderingOfComponent,
  testComponentStyleByProperties,
  testComponentText,
  testComponentClick,
  testComponentVisibility,
  testComponentLoadingBehavior,
  testComponentIconRendering,
  testComponentDisabledBehavior,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Button', () => {
  testRenderingOfComponent({
    testId: 'button',
    component: Button,
    componentProperties: {},
  });

  testComponentText({
    testId: 'button',
    component: Button,
    componentProperties: { text: 'Click me' },
    expectedText: 'Click me',
  });

  testComponentClick({
    testId: 'button',
    component: Button,
    componentProperties: {},
    handler: () => console.log('clicked'),
  });

  testComponentStyleByProperties({
    testId: 'button',
    component: Button,
    propertiesToTest: {
      width: 200,
      height: 50,
      background: 'success',
      padding: '4px 16px',
      gap: '8px 24px',
      borderRadius: 32,
      borderWidth: 1,
    },
    expectedResultingStyles: {
      width: '200px',
      height: '50px',
      background: 'var(--success)',
      padding: '4px 16px',
      gap: '8px 24px',
      'border-radius': '32px',
      'border-width': '1px',
    },
  });

  testComponentVisibility({
    testId: 'button',
    component: Button,
    componentProperties: {},
  });

  testComponentDisabledBehavior({
    testId: 'button',
    component: Button,
  });

  testComponentLoadingBehavior({
    component: Button,
    componentProperties: {},
  });

  testComponentIconRendering({
    component: Button,
    componentProperties: { leftIcon: 'CardIcon' },
  });

  testComponentIconRendering({
    component: Button,
    componentProperties: { rightIcon: 'BellIcon' },
  });

  testComponentAccessibility({
    testId: 'button',
    component: Button,
    componentProperties: {
      text: 'Accessibility Test',
      isDisabled: true,
      isLoading: true,
    },
    expectedAttributes: {
      role: 'button',
      'aria-label': 'Accessibility Test',
      'aria-disabled': 'true',
      'aria-busy': 'true',
    },
  });
});
