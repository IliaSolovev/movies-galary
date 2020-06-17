import { Movie } from '../types';

export const movieApi = {
  fetchMovies: (params: string): Promise<Movie[]> => fetch(`https://reactjs-cdp.herokuapp.com/movies?${params}`)
    .then((response) => response.json()),
  fetchMovie: (id: number): Promise<Movie> => fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
    .then((response) => response.json()),
};
