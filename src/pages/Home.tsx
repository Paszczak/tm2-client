import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

// Components
import { List } from '../components/layout/list';
import { Card } from '../components/layout/card';
import { Button } from '../components/layout/button';
import { NewsItem } from '../components/home/news-item';

// Style
import classes from '../styles/pages.module.scss';

// GET_NEWS GraphQL query to get publishe or all news
export const GET_NEWS = gql`
  query GetNews($published: Boolean, $order: Sort) {
    getNews(published: $published, order: $order) {
      id
      title
      body
      created
    }
  }
`;

type News = {
  id: string;
  title: string;
  body: string;
  created: string;
};

export default function Home(): JSX.Element {
  const [published, publishedSet] = useState<boolean>(true);

  const { loading, error, data, refetch } = useQuery(GET_NEWS, {
    variables: { published, order: 'DESC' },
  });

  if (loading)
    return (
      <main>
        <div>Loading...</div>
      </main>
    );

  if (error)
    return (
      <main>
        <div>Error: {JSON.stringify(error)}</div>
      </main>
    );

  const togglePublishedHandler = () => {
    refetch({
      published: !published,
      order: 'DESC',
    });
    publishedSet((prev) => !prev);
  };

  return (
    <main className={classes.main}>
      <h1>Aktualności</h1>
      {data && (
        <List
          items={data.getNews ?? []}
          render={(item: News) => (
            <Card
              key={item.id}
              onClick={() =>
                console.log(`[HOME] News card ${item.id} presses.`)
              }>
              <NewsItem {...item} />
            </Card>
          )}
        />
      )}
      <Button
        onClick={togglePublishedHandler}
        light
        label={
          published ? 'Pokaż wszystkie aktualności' : 'Pokaż tylko aktualne'
        }
      />
    </main>
  );
}
