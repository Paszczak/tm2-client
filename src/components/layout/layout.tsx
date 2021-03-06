import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../../hoc/error-boundary';
import { Footer } from './footer';
import { Navigation } from './navigation';

export function Layout(): ReactElement {
  return (
    <>
      <ErrorBoundary component='Navigation'>
        <Navigation />
      </ErrorBoundary>
      <Outlet />
      <Footer />
    </>
  );
}
