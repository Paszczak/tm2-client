import classes from './button.module.scss';

type ButtonProps = {
  label: string;
  light?: boolean;
  onClick: () => void;
};

export function Button({ label, light, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      className={light ? classes.buttonLight : classes.buttonFilled}
      onClick={onClick}>
      {label}
    </button>
  );
}
