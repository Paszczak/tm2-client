import { Children, ReactElement, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../../hoc/error-boundary';
import { Navigation } from './navigation';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <ErrorBoundary component='Navigation'>
        <Navigation />
      </ErrorBoundary>
      <div>Layout nav fragment</div>
      {children}
      <div>Layout footer fragment</div>
    </>
  );
}
