import {render, screen} from '@testing-library/react';
import {Footer} from './footer';

test('is visible', () => {
  render(<Footer />)

  expect(screen.getByText(/Pracownia P2/i)).toBeVisible()
})