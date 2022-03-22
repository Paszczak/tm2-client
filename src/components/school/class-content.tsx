import { useState } from 'react';
import { useParams } from 'react-router-dom';

// Apollo client imports
import { gql, useQuery } from '@apollo/client';

// Components
import { List } from '../layout/list';
import { Card } from '../layout/card';
import { Modal } from '../layout/modal';
import { Backdrop } from '../layout/backdrop';

// Types
import { Content } from '../../models';
import useModalTransition from '../../hooks/use-modal-transition';
import { ContentItem } from './content-item';

export const GET_CLASS_DATA = gql`
  query GetClassData($getClassDataId: String) {
    getClassData(id: $getClassDataId) {
      id
      name
      content {
        id
        title
        body
        files
        created
      }
    }
  }
`;

export function ClassContent(): JSX.Element {
  const [open, openSet] = useState<boolean>(false);
  const [modalContent, modalContentSet] = useState<Content | null>(null);
  const { classId } = useParams();

  const { loading, error, data } = useQuery(GET_CLASS_DATA, {
    variables: {
      getClassDataId: classId,
    },
  });

  const transition = useModalTransition(open);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error)}</div>;

  const openModalHandler = (id: string) => {
    modalContentSet(
      data.getClassData.content.find((content: Content) => content.id === id)
    );
    openSet(true);
  };

  const closeModalHandler = () => {
    openSet(false);
  };

  return data.getClassData.content.length > 0 ? (
    <>
      <h3>{data.getClassData.name}</h3>
      <List
        items={data.getClassData.content}
        render={(item: Content) => (
          <Card key={item.id} onClick={() => openModalHandler(item.id)}>
            <ContentItem
              title={item.title}
              body={item.body}
              files={item.files}
              created={item.created}
            />
          </Card>
        )}
        testId='class-content'
      />
      {open && <Backdrop onClick={closeModalHandler} />}
      {transition(
        (style, item) =>
          item && (
            <Modal
              title={modalContent ? modalContent.title : ''}
              onClose={closeModalHandler}
              style={style}>
              {modalContent ? (
                <>
                  <p>{modalContent.body}</p>
                  <div>
                    <b>Pliki</b>
                  </div>
                  {modalContent.files ? (
                    <ul>
                      {modalContent.files.map((file) => (
                        <li key={file}>{file}</li>
                      ))}
                    </ul>
                  ) : (
                    'Nie ma żadnych plików.'
                  )}
                </>
              ) : (
                ''
              )}
            </Modal>
          )
      )}
    </>
  ) : (
    <>
      <h3>{data.getClassData.name}</h3>
      <div data-testId='class-content'>Nie ma żadnych materiałów</div>
      <small></small>
    </>
  );
}
