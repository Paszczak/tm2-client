import { render, screen } from '@testing-library/react';

// Components
import { ContentItem } from './content-item';

const DUMMY_FILES = ['file1.pdf', 'file2.pdf'];

test('redners and have content and file list', () => {
  render(
    <ContentItem
      title='Test title'
      body='Test content'
      files={DUMMY_FILES}
      created='1647936572561'
    />
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/Test title/i);
  expect(screen.getByText(/Test content/i)).toBeVisible();
  expect(screen.getByText(/Utworzone:/i)).toHaveTextContent(
    '22 marca 2022, 09:09:32'
  );
  expect(screen.getByText(/Plików/i)).toHaveTextContent(
    `Plików: ${DUMMY_FILES.length}`
  );
});

test('redners with empty file list', () => {
  render(
    <ContentItem
      title='Test title'
      body='Test content'
      created='1647936572561'
    />
  );

  expect(screen.getByText(/Plików/i)).toHaveTextContent(`Plików: 0`);
});
