import { render, screen } from '@testing-library/react';
import App from './App';

// Apollo testimg mock server
import { MockedProvider } from '@apollo/client/testing';
import { mockedRender } from './testing-tools/apollo-render';

// Schema and query imports
import { typeDefs } from '../../tm2-graphql/src/schema';
import { GET_NEWS } from './pages/Home';

test('can load data', () => {
  mockedRender(<App />, {
    News: () => ({
      id: 'n2',
      title: 'News 2',
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas?',
      published: true,
      created: '1447267515234',
    }),
  });

  expect(screen.getByText('Loading...')).toBeVisible();
});

test('can navigate', () => {
  mockedRender(<App />);
  screen.getByTestId('nav-link-home').click();
  expect(screen.getByTestId('nav-link-home')).toHaveClass('active');

  screen.getByTestId('nav-link-school').click();
  expect(screen.getByTestId('nav-link-school')).toHaveClass('active');
});
