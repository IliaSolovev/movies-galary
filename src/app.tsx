import React from 'react';
import './styles/main.scss';
import 'normalize.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import FindMovie from './Pages/FindMovie/FindMovie';
import FoundMovie from './Pages/FoundMovie/FoundMovie';
import CatchError from './components/CatchError/CatchError';
import store, { persistor } from './redux/store';
import PageNotFound from './Pages/404/PageNotFound';

const App: React.FC = (props) => (
  <CatchError>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <FindMovie />
            </Route>
            <Route path="/movie/:movieId">
              <FoundMovie />
            </Route>
            <Route path="/*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </CatchError>
);

export default App;
