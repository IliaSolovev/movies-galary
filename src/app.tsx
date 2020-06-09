import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { FindMovieContainer, FoundMovieContainer, ErrorPage } from './Pages';
import { store } from './redux';
import { CatchError } from './components';


import './styles/main.scss';
import 'normalize.css';

const App: React.FC = (props) => (
  <CatchError>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <FindMovieContainer />
          </Route>
          <Route path="/movie/:movieId">
            <FoundMovieContainer />
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
