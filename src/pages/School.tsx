import { gql, useQuery } from '@apollo/client';
import { Outlet } from 'react-router-dom';

// Components
import { List } from '../components/layout/list';
import { ClassItem } from '../components/school/class-item';

// Types
import { Class } from '../models';

// Styles
import classes from '../styles/pages.module.scss';

// GET_YEARS GraphQL query to get current school classes
export const GET_YEARS = gql`
  query GetYears($current: Boolean) {
    getYears(current: $current) {
      name
      classes {
        name
        id
      }
    }
  }
`;

export default function School(): JSX.Element {
  const { loading, error, data } = useQuery(GET_YEARS, {
    variables: {
      current: true,
    },
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

  return (
    <main className={classes.main}>
      <h1>Materiały na rok {data.getYears[0].name}</h1>
      {data && (
        <List
          items={data.getYears[0].classes ?? []}
          render={(item: Class) => <ClassItem key={item.id} {...item} />}
        />
      )}
      <Outlet />
    </main>
  );
}
