import { ReactNode } from 'react';

// React-Spring animations imports
import { useSpring, animated, easings } from 'react-spring';

import classes from './card.module.scss';

type CardProps = {
  key: string;
  children: ReactNode;
  onClick: () => void;
};

export function Card({ children, onClick }: CardProps): JSX.Element {
  const start = Math.floor(Math.random() * 1000);
  const duration = Math.floor(Math.random() * 3000) + 1;
  const animation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: start + duration,
      easing: easings.easeInOutQuad,
    },
  });

  return (
    <animated.div
      className={classes.card}
      style={animation}
      onClick={onClick}
      role='button'>
      {children}
    </animated.div>
  );
}
