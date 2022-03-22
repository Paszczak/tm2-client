import { NavLink } from 'react-router-dom';
import classes from './class-item.module.scss';

type ClassItemProps = {
  id: string;
  name: string;
};

export function ClassItem({ id, name }: ClassItemProps): JSX.Element {
  return (
    <NavLink
      to={id}
      className={({ isActive }) =>
        isActive ? classes.active : classes.inactive
      }>
      <div>{name}</div>
    </NavLink>
  );
}
