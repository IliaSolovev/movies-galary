export const ADD_MOVIES = "ADD_MOVIES";
export const SET_SEARCH_TYPE = "SET_SEARCH_TYPE";
export const SET_FIELD_VALUE = "SET_FIELD_VALUE";
export const SET_MOVIE_SORT_FILTER = "SET_MOVIE_SORT_FILTER";

export interface Movie {
    "id": number,
    "title": string,
    "tagline": string,
    "vote_average": number,
    "vote_count": number,
    "release_date": string,
    "poster_path": string,
    "overview": string,
    "budget": number,
    "revenue": number,
    "runtime": number,
    "genres": string[]
}
export interface Movies {
    data: Movie[],
    total: number,
    offset: number,
    limit: number,
}
export type Filters = "rating"| "release date";
export const addMovies = (movies: Movies) => ({type: ADD_MOVIES, payload: movies} as const);
export const setSearchType = (type: string) => ({type: SET_SEARCH_TYPE, payload: type} as const);
export const setFieldValue = (value: string) => ({type: SET_FIELD_VALUE, payload: value} as const);
export const setMoviesSortFilter = (filter: Filters) => ({type: SET_MOVIE_SORT_FILTER, payload: filter} as const);

type Action = ReturnType<typeof addMovies>
    | ReturnType<typeof setSearchType>
    | ReturnType<typeof setMoviesSortFilter>
    | ReturnType<typeof setFieldValue>;


export interface State {
    movies: Movies,
    moviesSortFilter: Filters,
    searchData: {
        searchType: string,
        fieldValue: string,
    }
}

export const initialState: State = {
    movies: {
        data:[],
        total: 0,
        offset: 0,
        limit: 0,
    },
    moviesSortFilter: "rating",
    searchData: {
        searchType: 'genre',
        fieldValue: '',
    }
};
export const moviesReducer = (state: State, action: Action) => {
        switch (action.type) {
            case ADD_MOVIES:
                return {
                    ...state,
                    movies: action.payload
                };
            case SET_SEARCH_TYPE:
                return {
                    ...state,
                    searchData: {
                        ...state.searchData,
                        searchType: action.payload
                    }
                };
            case SET_FIELD_VALUE:
                return {
                    ...state,
                    searchData: {
                        ...state.searchData,
                        fieldValue: action.payload
                    }
                };
            case SET_MOVIE_SORT_FILTER:
                return {
                    ...state,
                    moviesSortFilter: action.payload
                };
            default:
                return state;
        }
    }
;
