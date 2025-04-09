import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '../../theme/provider/ThemeProvider';

import {
  IAttributesTest,
  IInteractionTest,
  IPartialRenderingTest,
  IRenderingTest,
  IStylePropsTest,
  ITextContentTest,
  IVariantTest,
} from './types';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

export const testRenderingOfComponent = <P extends object>({
  testId,
  component: Component,
  componentProperties,
}: IRenderingTest<P>) => {
  it(`should render the component ${testId}`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);
    expect(element).toBeInTheDocument();
  });
};

export const testComponentStyleByProperties = <P extends object>({
  testId,
  component: Component,
  propertiesToTest,
  expectedResultingStyles,
}: IStylePropsTest<P>) => {
  it(`should render the component ${testId} with correct styles`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...propertiesToTest} />
    );

    const element = getByTestId(testId);

    for (const [cssProperty, expectedCssValue] of Object.entries(
      expectedResultingStyles
    )) {
      expect(element).toHaveStyle(`${cssProperty}: ${expectedCssValue}`);
    }
  });
};

export const testComponentAttributes = <P extends object>({
  testId,
  component: Component,
  componentProperties,
  expectedAttributes,
}: IAttributesTest<P>) => {
  it(`should render the component ${testId} with correct attributes`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);

    for (const [attr, expectedValue] of Object.entries(expectedAttributes)) {
      expect(element).toHaveAttribute(attr, expectedValue.toString());
    }
  });
};

export const testComponentText = <P extends object>({
  testId,
  component: Component,
  componentProperties,
  expectedText,
}: ITextContentTest<P>) => {
  it(`should render the component ${testId} with text "${expectedText}"`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);
    expect(element).toHaveTextContent(expectedText);
  });
};

export const testComponentVisibility = <P extends object>({
  testId,
  component: Component,
  componentProperties,
}: IRenderingTest<P>) => {
  it(`should not render the component when isHidden is true`, () => {
    const { queryByTestId } = renderWithTheme(
      <Component {...componentProperties} isHidden={true} />
    );

    const element = queryByTestId(testId);
    expect(element).not.toBeInTheDocument();
  });
};

export const testComponentClick = <P extends object>({
  testId,
  component: Component,
  componentProperties,
  handler,
}: IInteractionTest<P>) => {
  it(`should call onClick handler when ${testId} is clicked`, () => {
    const mockHandler = jest.fn(handler);

    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} onClick={mockHandler} />
    );

    const element = getByTestId(testId);
    fireEvent.click(element);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
};

export const testComponentLoadingBehavior = <P extends object>({
  component: Component,
  componentProperties,
}: IPartialRenderingTest<P>) => {
  it('should render Spinner when isLoading is true', () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} isLoading={true} />
    );

    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('should not render Spinner when isLoading is false', () => {
    const { queryByTestId } = renderWithTheme(
      <Component {...componentProperties} isLoading={false} />
    );

    const spinner = queryByTestId('spinner');
    expect(spinner).not.toBeInTheDocument();
  });
};

export const testComponentIconRendering = <P extends object>({
  component: Component,
  componentProperties,
}: IPartialRenderingTest<P>) => {
  it('should render icon when icon prop is provided', () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const icon = getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('should not render icon when no icon prop is provided', () => {
    const propsWithoutIcon = { ...componentProperties };
    Object.keys(propsWithoutIcon).forEach((key) => {
      if (key.toLowerCase().includes('icon')) {
        delete propsWithoutIcon[key as keyof typeof propsWithoutIcon];
      }
    });

    const { queryByTestId } = renderWithTheme(
      <Component {...propsWithoutIcon} />
    );

    const icon = queryByTestId('icon');
    expect(icon).not.toBeInTheDocument();
  });
};

export const testComponentDisabledBehavior = <P extends object>({
  testId,
  component: Component,
}: IVariantTest<P>) => {
  it(`should render the component ${testId} as disabled`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...({ isDisabled: true } as P)} />
    );

    const element = getByTestId(testId);
    expect(element).toHaveAttribute('aria-disabled', 'true');
  });
};

export const testComponentAccessibility = <P extends object>({
  testId,
  component: Component,
  componentProperties,
  expectedAttributes,
}: IAttributesTest<P>) => {
  it(`should render the component ${testId} with correct accessibility attributes`, () => {
    const { getByTestId } = renderWithTheme(
      <Component {...componentProperties} />
    );

    const element = getByTestId(testId);

    for (const [attr, expectedValue] of Object.entries(expectedAttributes)) {
      expect(element).toHaveAttribute(attr, expectedValue.toString());
    }
  });
};
