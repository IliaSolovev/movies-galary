import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { moviesReducer } from './moviesSlice';

const reducers = combineReducers({
  movies: moviesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export type RootState = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export default store;
