import { NavLink } from 'react-router-dom';

// Components
import { ReactComponent as Logo } from '../../assets/tm-logo-new.svg';

// Icons
import { ReactComponent as NewsIcon } from '../../assets/newspaper-sharp.svg';
import { ReactComponent as SchoolIcon } from '../../assets/school-sharp.svg';

// Style
import classes from './navigation.module.scss';

export function Navigation(): JSX.Element {
  return (
    <nav className={classes.navigation}>
      <NavLink to='/' className={classes.logo}>
        <span>
          <Logo />
        </span>
        <span className={classes.title}>Teoria muzyki</span>
      </NavLink>
      <div className={classes.links}>
        <NavLink
          to='/home'
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? classes.active : classes.inactive
          }
          role={'navigation'}
          data-testid='nav-link-home'>
          <span className={classes.navIcon}>
            <NewsIcon />
          </span>
          <span className={classes.navLabel}>Wiadomości</span>
        </NavLink>
        <NavLink
          to='/school'
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? classes.active : classes.inactive
          }
          role={'navigation'}
          data-testid='nav-link-school'>
          <span className={classes.navIcon}>
            <SchoolIcon />
          </span>
          <span className={classes.navLabel}>Szkoła</span>
        </NavLink>
      </div>
    </nav>
  );
}
