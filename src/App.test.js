import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /math magician/i });
  expect(linkElement).toBeInTheDocument();
});
