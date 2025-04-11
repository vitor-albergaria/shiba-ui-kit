import { Pagination } from './Pagination';

import {
  testRenderingOfComponent,
  testComponentAccessibility,
} from '../../testing/functions';

describe('UI Component: Pagination', () => {
  testRenderingOfComponent({
    testId: 'pagination-control',
    component: Pagination,
    componentProperties: {
      currentPage: 1,
      itemsPerPage: 6,
      maxVisiblePages: 5,
      totalItems: 40,
      onPageChange: () => {},
    },
  });

  testComponentAccessibility({
    testId: 'pagination-control',
    component: Pagination,
    componentProperties: {
      currentPage: 1,
      itemsPerPage: 6,
      maxVisiblePages: 5,
      totalItems: 40,
      onPageChange: () => {},
    },
    expectedAttributes: {
      role: 'navigation',
      'aria-label': 'Pagination',
    },
  });
});
