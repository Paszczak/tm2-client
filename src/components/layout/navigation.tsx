import { NavLink } from 'react-router-dom';

import classes from './navigation.module.scss';

export function Navigation(): JSX.Element {
  return (
    <nav>
      <NavLink
        to='/home'
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? classes.active : classes.inactive
        }
        role={'navigation'}>
        Home
      </NavLink>
      <NavLink
        to='/school'
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? classes.active : classes.inactive
        }
        role={'navigation'}>
        School
      </NavLink>
    </nav>
  );
}
