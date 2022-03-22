import { waitFor } from '@testing-library/react';
import { mockedRender } from '../testing-tools/apollo-render';

// Components
import School from './School';

test('renders learn react link', async () => {
  const getYearsSpy = jest.fn();

  mockedRender(<School />, {
    mocks: {
      Query: {
        getYears: getYearsSpy,
      },
    },
  });
  await waitFor(() => expect(getYearsSpy).toHaveBeenCalled());
  // userEvent.click(screen.getByText(/harmonia/i));
});
