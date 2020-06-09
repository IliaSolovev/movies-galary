import { Movie } from '../redux';

export const SortFunctions = {
  releaseDate(movie1: Movie, movie2:Movie) {
    const Date1 = new Date(movie1.release_date);
    const Date2 = new Date(movie2.release_date);
    if (Date1 < Date2) {
      return -1;
    } if (Date1 > Date2) {
      return 1;
    }
    return 0;
  },
  rating(movie1: Movie, movie2:Movie) {
    if (movie1.vote_average < movie2.vote_average) {
      return -1;
    } if (movie1.vote_average > movie2.vote_average) {
      return 1;
    }
    return 0;
  },

};
