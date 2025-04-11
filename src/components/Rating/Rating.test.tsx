import { Rating } from './Rating';

import {
  testComponentVisibility,
  testRenderingOfComponent,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Rating', () => {
  testRenderingOfComponent({
    testId: 'rating',
    component: Rating,
    componentProperties: {},
  });

  testComponentVisibility({
    testId: 'rating',
    component: Rating,
    componentProperties: {},
  });

  testComponentAccessibility({
    testId: 'rating',
    component: Rating,
    componentProperties: { rating: 3 },
    expectedAttributes: {
      role: 'radiogroup',
      'aria-label': 'Rating: 3 out of 5 stars',
    },
  });
});
