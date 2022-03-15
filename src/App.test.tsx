import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home Page Route/i);
  expect(linkElement).toBeInTheDocument();
});

test('can navigate', () => {
  render(<App />);
  expect(screen.getByText('Home')).toHaveClass('active');

  screen.getByText('School').click();
  expect(screen.getByText('School')).toHaveClass('active');
});
