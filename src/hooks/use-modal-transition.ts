import { useTransition } from 'react-spring';

export default function useModalTransition(open: boolean) {
  const transition = useTransition(open, {
    from: { x: -400, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -400, opacity: 0 },
  });

  return transition;
}
