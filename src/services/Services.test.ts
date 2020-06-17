import { SortFunctions } from './SortMoviesList';
import { getSortFiltersForQuery } from './getSortFiltersForQuery';

const movie1 = {
  id: 447332,
  title: 'A Quiet Place',
  tagline: 'A Quiet Place',
  vote_average: 6.5,
  vote_count: 19,
  release_date: '2018-04-05',
  poster_path: 'https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg',
  overview: 'A Quiet Place is a 2018 American horror film directed by John Krasinski, who also stars i'
    + 'n the film with Emily Blunt, his wife in real life. The screenplay was written by Krasinski, Bryan Woods, '
    + 'and Scott Beck based on a story by Woods and Beck. The plot follows a family of four who must live life in silence '
    + 'while hiding from creatures that hunt by sound.',
  budget: 17000000,
  revenue: 0,
  genres: [
    'Drama',
    'Horror',
    'Thriller',
  ],
  runtime: 95,
};
const movie2 = {
  id: 467867,
  title: 'Paterno',
  tagline: 'The greater the legend, the harder the fall.',
  vote_average: 0,
  vote_count: 0,
  release_date: '2018-04-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg',
  overview: 'After becoming the winningest coach in college football history, Joe Paterno is '
    + "embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and "
    + 'forcing him to face questions of institutional failure regarding the victims.',
  budget: 0,
  revenue: 0,
  genres: [
    'TV Movie',
    'Drama',
  ],
  runtime: 105,
};


describe('sort function', () => {
  it('should sort by release date', () => {
    const dates = [movie2, movie1];
    dates.sort(SortFunctions.releaseDate);
    expect(dates[0]).toEqual(movie1);
  });
  it('should sort by rating', () => {
    const dates = [movie2, movie1];
    dates.sort(SortFunctions.rating);
    expect(dates[0]).toEqual(movie2);
  });
});

describe('get sort filter for query', () => {
  it('should return release_date string', () => {
    expect(getSortFiltersForQuery('release date')).toEqual('release_date');
  });
  it('should return rating string', () => {
    expect(getSortFiltersForQuery('rating')).toEqual('rating');
  });
});
