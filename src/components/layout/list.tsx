import { ReactNode } from 'react';

import classes from './list.module.scss';

export function List<ListItem>({
  items,
  style,
  testId,
  render,
}: {
  items: ListItem[];
  style?: any;
  testId?: string;
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul className={classes.list} style={style} data-testid={testId}>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}
