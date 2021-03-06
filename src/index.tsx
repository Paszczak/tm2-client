import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';

// Apollo GraphQL server settings
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
