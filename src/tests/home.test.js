// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';
import '@testing-library/jest-dom/extend-expect';

describe('Home component', () => {
  test('renders correctly', () => {
    render(<Home />);
    const homeTextElement = screen.getByText(/Welcome to the Home Page!/i);
    expect(homeTextElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Add more test cases for the Home component if needed
});
