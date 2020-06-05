import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { FindMovie, FoundMovie, ErrorPage } from './Pages';

import { CatchError } from './components';


import './styles/main.scss';
import 'normalize.css';

const App: React.FC = (props) => (
  <CatchError>
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
  </CatchError>
);

export default App;
