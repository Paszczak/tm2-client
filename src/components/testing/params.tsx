import { useParams } from 'react-router-dom';

export function Params() {
  const params = useParams();
  return <div>{JSON.stringify(params)}</div>;
}
