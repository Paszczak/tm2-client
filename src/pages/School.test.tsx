import { render, screen } from '@testing-library/react';
import School from './School';

test('renders learn react link', () => {
  render(<School />);
  const element = screen.getByText(/School Page Route/i);
  expect(element).toBeInTheDocument();
});
