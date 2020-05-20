import { Movie } from "./MoviesContext";

export const ADD_MOVIE = "ADD_MOVIE";

export const addMovies = (movies: Movie[]) => ({
  type: ADD_MOVIE,
  payload: movies,
});

type Action = { type: typeof ADD_MOVIE; payload: Movie[] };

interface State {
  movies: Movie[];
}
const initialState: State = {
  movies: [],
};
export const moviesReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return;
    default:
      return state;
  }
};
