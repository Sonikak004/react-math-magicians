// QuoteComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteComponent from '../components/quote';
import '@testing-library/jest-dom/extend-expect';

describe('QuoteComponent', () => {
  test('renders correctly', () => {
    render(<QuoteComponent />);
    const quoteElement = screen.getByTestId('quote');
    expect(quoteElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<QuoteComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
