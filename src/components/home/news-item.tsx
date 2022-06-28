import classes from './news-item.module.scss';

type NewsItemProps = {
  title: string;
  lead: string;
  body: string;
  created: string;
};

export function NewsItem({ title, lead, created }: NewsItemProps): JSX.Element {
  return (
    <>
      <h3 className={classes.newsTitle}>{title}</h3>
      <p role='article' className={classes.newsBody}>
        {lead}...
      </p>
      <div className={classes.newsFooter} role='contentinfo'>
        Utworzone:{' '}
        {new Date(+created).toLocaleString('pl', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        })}
      </div>
    </>
  );
}
