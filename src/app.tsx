import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { FindMovie, FoundMovie, ErrorPage } from './Pages';
import { CatchError } from './components';

import './styles/main.scss';
import 'normalize.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_HOST || 'http://localhost:8080/graphql',
});

const App: React.FC = (props) => {
  return (
  <CatchError>
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  </CatchError>
)};

export default App;
