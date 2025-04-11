import React, { useState, useEffect } from 'react';
import { IPagination } from './Pagination.types';
import styles from './Pagination.module.css';
import { TextDisplay } from '../TextDisplay/TextDisplay';
import { Icon } from '../Icon/Icon';

export const Pagination: React.FC<IPagination> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange = () => {},
  maxVisiblePages = 5,
  selectPageText = 'Page:',
}) => {
  const [actualPage, setActualPage] = useState(currentPage);
  const [inputValue, setInputValue] = useState(currentPage.toString());

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setActualPage(currentPage);
    setInputValue(currentPage.toString());
  }, [currentPage]);

  if (totalItems <= itemsPerPage) return null;

  const updatePage = (newPage: number) => {
    const validPage = Math.max(1, Math.min(newPage, totalPages));
    
    setActualPage(validPage);
    setInputValue(validPage.toString());
    onPageChange(validPage);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let start = Math.max(actualPage - halfVisible, 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const getEllipsisPosition = (index: number, array: (number | string)[]) => {
    const distanceFromStart = index;
    const distanceFromEnd = array.length - 1 - index;
    
    return distanceFromStart <= distanceFromEnd ? 'left' : 'right';
  };

  const getVisibleNumberPages = () => {
    return getPageNumbers().filter(p => typeof p === 'number') as number[];
  };

  const handleLeftEllipsisClick = () => {
    const visibleNumberPages = getVisibleNumberPages();
    const smallerPages = visibleNumberPages.filter(p => p < actualPage);
    
    if (smallerPages.length > 0) {
      if (smallerPages.length === 1 && smallerPages[0] === 1 && actualPage - smallerPages[0] > 5) {
        updatePage(Math.max(Math.floor(actualPage / 2), 1));
      } else {
        const nextSmallerPage = Math.max(...smallerPages);
        updatePage(Math.max(nextSmallerPage - 3, 1));
      }
    } else {
      updatePage(Math.max(actualPage - 3, 1));
    }
  };

  const handleRightEllipsisClick = () => {
    const visibleNumberPages = getVisibleNumberPages();
    const largerPages = visibleNumberPages.filter(p => p > actualPage);
    
    if (largerPages.length > 0) {
      if (largerPages.length === 1 && largerPages[0] === totalPages && largerPages[0] - actualPage > 5) {
        updatePage(Math.min(Math.ceil((actualPage + totalPages) / 2), totalPages));
      } else {
        const nextLargerPage = Math.min(...largerPages);
        updatePage(Math.min(nextLargerPage + 3, totalPages));
      }
    } else {
      updatePage(Math.min(actualPage + 3, totalPages));
    }
  };

  const handlePreviousPage = () => {
    if (actualPage > 1) {
      updatePage(actualPage - 1);
    }
  };

  const handleNextPage = () => {
    if (actualPage < totalPages) {
      updatePage(actualPage + 1);
    }
  };

  const handlePageClick = (
    page: number | string,
    position: 'left' | 'right' | null = null
  ) => {
    if (typeof page === 'number') {
      updatePage(page);
    } else if (page === '...' && position) {
      if (position === 'left') {
        handleLeftEllipsisClick();
      } else {
        handleRightEllipsisClick();
      }
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    const pageNum = parseInt(value);
    if (!isNaN(pageNum)) {
      setActualPage(pageNum);
    }
  };

  const handlePageInputBlur = () => {
    const pageNum = parseInt(inputValue);
    
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      updatePage(pageNum);
    } else {
      setInputValue(actualPage.toString());
    }
  };

  const renderPageButton = (page: number) => (
    <button
      key={page}
      className={`${styles.buttonControl} ${
        page === actualPage ? styles.buttonSelected : ''
      }`}
      role='button'
      aria-label={`Page ${page}`}
      aria-current={page === actualPage ? 'page' : undefined}
      onClick={() => handlePageClick(page)}
      tabIndex={0}
    >
      <TextDisplay
        text={String(page)}
        fontSize='sm'
        fontWeight='strong'
      />
    </button>
  );

  const renderEllipsisButton = (position: 'left' | 'right', index: number) => (
    <button
      key={`ellipsis-${position}-${index}`}
      className={styles.buttonControl}
      aria-label={
        position === 'left'
          ? 'Páginas anteriores'
          : 'Próximas páginas'
      }
      onClick={() => handlePageClick('...', position)}
    >
      <TextDisplay text='...' fontSize='sm' fontWeight='strong' />
    </button>
  );

  const renderNavigationButton = (
    isNext: boolean,
    disabled: boolean,
    onClick: () => void
  ) => (
    <button
      className={`${styles.buttonControl} ${
        disabled ? styles.buttonDisabled : ''
      }`}
      role='button'
      aria-label={isNext ? 'Next page' : 'Previous page'}
      aria-disabled={disabled}
      onClick={onClick}
      tabIndex={disabled ? -1 : 0}
      disabled={disabled}
    >
      <Icon
        icon={isNext ? 'RightTwoIcon' : 'LeftTwoIcon'}
        background='content'
        size={10}
        aria-hidden='true'
      />
    </button>
  );

  return (
    <div
      className={styles.mainContainer}
      data-testid='pagination-control'
      role='navigation'
      aria-label='Pagination'
    >
      <div className={styles.controlWrapper}>
        {renderNavigationButton(false, actualPage === 1, handlePreviousPage)}

        {getPageNumbers().map((page, index, arr) => {
          if (typeof page === 'number') {
            return renderPageButton(page);
          } else {
            const position = getEllipsisPosition(index, arr);
            return renderEllipsisButton(position, index);
          }
        })}

        {renderNavigationButton(true, actualPage === totalPages, handleNextPage)}
      </div>

      <div className={styles.controlWrapper}>
        <TextDisplay text={selectPageText} fontSize='sm' fontWeight='strong' />

        <input
          className={styles.pageInput}
          type='number'
          min={1}
          max={totalPages}
          value={inputValue}
          onChange={handlePageInputChange}
          onBlur={handlePageInputBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handlePageInputBlur();
            }
          }}
          aria-label='Go to page'
          role='spinbutton'
          aria-valuemin={1}
          aria-valuemax={totalPages}
          aria-valuenow={parseInt(inputValue)}
        />

        <TextDisplay
          fontSize='sm'
          fontWeight='strong'
          text={`/${totalPages || 0}`}
          aria-hidden='true'
        />
      </div>
    </div>
  );
};
