import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

// Animations
import { animated } from 'react-spring';

// Components
import { ReactComponent as CloseIcon } from '../../assets/close-circle-outline.svg';

// Styles
import classes from './modal.module.scss';

export function Modal({
  title,
  onClose,
  children,
  style,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  style: any;
}): React.ReactPortal | null {
  const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

  return createPortal(
    <animated.div className={classes.modal} style={style} role='alert'>
      <div className={classes.header}>
        <div className={classes.icon} onClick={onClose} role='button'>
          <CloseIcon />
        </div>
        <h3>{title}</h3>
      </div>
      {children}
    </animated.div>,
    modalRoot
  );
}
