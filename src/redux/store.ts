import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./moviesSlice";

const reducers = combineReducers({
    movies: moviesReducer
});

export type RootState = ReturnType<typeof reducers>;

const store = configureStore({
    reducer: reducers
});

export default store