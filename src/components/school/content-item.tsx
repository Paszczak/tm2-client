import classes from './content-item.module.scss';

type ContentItemProps = {
  title: string;
  body: string;
  files?: string[];
  created: string;
};

export function ContentItem({
  title,
  body,
  files,
  created,
}: ContentItemProps): JSX.Element {
  return (
    <>
      <h3 className={classes.contentTitle}>{title}</h3>
      <p role='article' className={classes.contentBody}>
        {body.substring(0, 100)}...
      </p>
      <div className={classes.contentFooter} role='contentinfo'>
        Utworzone:{' '}
        {new Date(+created).toLocaleString('pl', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        })}
        , Plików: {files ? files.length : '0'}
      </div>
    </>
  );
}
