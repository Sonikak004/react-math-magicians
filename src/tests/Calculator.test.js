import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../components/Calculator';

describe('Calculator component', () => {
  test('renders correctly', () => {
    render(<Calculator />);
    const calculatorElement = screen.getByText(/Lets do some Math!/i);
    expect(calculatorElement).toBeInTheDocument();
  });

  test('calculates addition correctly', () => {
    render(<Calculator />);
    const displayElement = screen.getByText('0', { selector: '.display' });

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));

    expect(displayElement).toHaveTextContent('12');
  });
  test('calculates subtraction correctly', () => {
    render(<Calculator />);
    const displayElement = screen.getByText('0', { selector: '.display' });

    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));

    expect(displayElement).toHaveTextContent('2');
  });
  test('calculates division correctly', () => {
    render(<Calculator />);
    const displayElement = screen.getByText('0', { selector: '.display' });

    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(displayElement).toHaveTextContent('16');
  });
  test('matches snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
