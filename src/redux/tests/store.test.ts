import {
  initialState,
  moviesReducer,
  addMovies,
  setSearchType,
  setFieldValue,
  setMoviesSortFilter,
  selectMovie,
  setIsLoading,
  SearchType, Filters,
} from '../moviesSlice';

const movie1 = {
  id: 337167,
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: '2018-02-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview: 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
  budget: 55000000,
  revenue: 136906000,
  genres: [
    'Drama',
    'Romance',
  ],
  runtime: 106,
};
const movie2 = {
  budget: 150000000,
  genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
  id: 269149,
  overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
  poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
  release_date: '2016-02-11',
  revenue: 1023784195,
  runtime: 108,
  tagline: 'Welcome to the urban jungle.',
  title: 'Zootopia',
  vote_average: 7.7,
  vote_count: 6795,
};

describe('init state', () => {
  it('init action', () => {
    expect(moviesReducer(undefined, { type: undefined })).toEqual(initialState);
  });
});

describe('actions', () => {
  it('add movies', () => {
    const movies = {
      data: [movie1, movie2],
      total: 0,
      offset: 0,
      limit: 0,
    };
    expect(moviesReducer(undefined, addMovies(movies))).toEqual({
      ...initialState,
      movies,
    });
  });
  it('set search type', () => {
    const searchType: SearchType = 'title';
    expect(moviesReducer(undefined, setSearchType(searchType))).toEqual({
      ...initialState,
      searchData: {
        ...initialState.searchData,
        searchType,
      },
    });
  });
  it('set field value', () => {
    const fieldValue = 'fieldValue';
    expect(moviesReducer(undefined, setFieldValue(fieldValue))).toEqual({
      ...initialState,
      searchData: {
        ...initialState.searchData,
        fieldValue,
      },
    });
  });
  it('set movie sort filter', () => {
    const sortFilter: Filters = 'release date';
    expect(moviesReducer(undefined, setMoviesSortFilter(sortFilter))).toEqual({
      ...initialState,
      moviesSortFilter: sortFilter,
    });
  });
  it('select movie ', () => {
    expect(moviesReducer(undefined, selectMovie(movie1))).toEqual({
      ...initialState,
      selectedMovie: movie1,
    });
  });
  it('set is loading ', () => {
    const isLoading = true;
    expect(moviesReducer(undefined, setIsLoading(isLoading))).toEqual({
      ...initialState,
      isLoading,
    });
  });
});
