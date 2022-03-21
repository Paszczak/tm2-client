import { ReactNode } from 'react';

import classes from './card.module.scss';

type CardProps = {
  key: string;
  children: ReactNode;
  onClick: () => void;
};

export function Card({ children, onClick }: CardProps): JSX.Element {
  return (
    <div className={classes.card} onClick={onClick}
    role='button'>
      {children}
    </div>
  );
}
