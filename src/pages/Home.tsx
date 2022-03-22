import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

// Components
import { List } from '../components/layout/list';
import { Card } from '../components/layout/card';
import { Button } from '../components/layout/button';
import { NewsItem } from '../components/home/news-item';
import { Modal } from '../components/layout/modal';

// Types
import { News } from '../models';

// Style
import classes from '../styles/pages.module.scss';
import { Backdrop } from '../components/layout/backdrop';
import useModalTransition from '../hooks/use-modal-transition';

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

export default function Home(): JSX.Element {
  const [published, publishedSet] = useState<boolean>(true);
  const [open, openSet] = useState<boolean>(false);
  const [modalContent, modalContentSet] = useState<News | null>(null);

  const transition = useModalTransition(open);

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

  const openModalHandler = (id: string) => {
    modalContentSet(data.getNews.find((news: News) => news.id === id));
    openSet(true);
  };

  const closeModalHandler = () => {
    openSet(false);
  };

  return (
    <main className={classes.main}>
      <h1>Aktualności</h1>
      {data && (
        <List
          items={data.getNews ?? []}
          render={(item: News) => (
            <Card key={item.id} onClick={() => openModalHandler(item.id)}>
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
      {open && <Backdrop onClick={closeModalHandler} />}
      {transition(
        (style, item) =>
          item && (
            <Modal
              title={modalContent ? modalContent.title : ''}
              onClose={closeModalHandler}
              style={style}>
              <p role='article'>{modalContent?.body}</p>
            </Modal>
          )
      )}
    </main>
  );
}
