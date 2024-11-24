import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Quiz Application header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Quiz Application/i);
  expect(headerElement).toBeInTheDocument();
});
