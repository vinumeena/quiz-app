import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quiz App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Quiz App/i); // Match the exact text
  expect(headerElement).toBeInTheDocument();
});
