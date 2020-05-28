import {Movie, Movies} from "../redux/moviesSlice";

export const movieApi = {
    fetchMovies: (params: string): Promise<Movies> => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies?${params}`)
            .then(response => response.json())
    },
    fetchMovie: (id: number): Promise<Movie> => {
        return fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
            .then(response => response.json())
    }
}
