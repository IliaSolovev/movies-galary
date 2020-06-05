import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { FindMovie } from './Pages/FindMovie/FindMovie';
import { FoundMovie } from './Pages/FoundMovie/FoundMovie';
import { CatchError } from './components/CatchError/CatchError';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';

import './styles/main.scss';
import 'normalize.css';
import { Button } from './components/Button/Button';

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
        <Button type="search" active>search</Button>
      </Router>
    </Provider>
  </CatchError>
);

export default App;
