import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { moviesReducer } from './moviesReducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
