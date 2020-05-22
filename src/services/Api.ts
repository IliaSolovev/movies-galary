import {Movie, Movies} from "../context/Movies/moviesReducer";

export const movieApi = {
    fetchMovies: (params: string): Promise<Movies> => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies?${params}`)
            .then(respones => respones.json())
    },
    fetchMovie: (id: number): Promise<Movie> => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(respones => respones.json())
    }
}
