import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { FindMovie, FoundMovie, ErrorPage } from './Pages';
import { store } from './redux/store';
import { CatchError } from './components';

import './styles/main.scss';
import 'normalize.css';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

const App: React.FC = (props) => (
  <CatchError>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <FindMovie />
            </Route>
            <Route path="/movie/:movieId">
              <FoundMovie />
            </Route>
            <Route>
              <ErrorPage errorMessage="page not found" statusCode={404} />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ApolloProvider>
  </CatchError>
);

export default App;
