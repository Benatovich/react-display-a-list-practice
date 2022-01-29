import { render, screen } from '@testing-library/react';
import App from './App';

test('violet', () => {
  render(<App />);
  const linkElement = screen.getByText(/violet/i);
  expect(linkElement).toBeInTheDocument();
});
