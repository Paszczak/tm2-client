import { render, screen } from '@testing-library/react';
import { NewsItem } from './news-item';

test('has title, body and created', () => {
  render(
    <NewsItem title='News 1' body='Lorem ipsum dolor' created='1647598048765' />
  );

  expect(screen.getByRole('heading')).toHaveTextContent('News 1');
  expect(screen.getByRole('article')).toHaveTextContent('Lorem ipsum dolor...');
  expect(screen.getByRole('contentinfo')).toHaveTextContent(
    '18 marca 2022, 11:07:28'
  );
});
