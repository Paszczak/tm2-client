import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const element = screen.getByText(/Home Page Route/i);
  expect(element).toBeInTheDocument();
});
