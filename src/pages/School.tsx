import { Outlet } from 'react-router-dom';

export default function School(): JSX.Element {
  return (
    <main>
      <h1>School Page Route</h1>
      <Outlet />
    </main>
  );
}
