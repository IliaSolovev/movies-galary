export interface MovieDescriptionData{
  id: string,
  title: string,
  tagline: string,
  rating: number,
  release_date: string,
  poster_path: string,
  overview: string,
  runtime: number,
  genres: string[]
}
export interface MovieDescriptionQueryData{
  movie: MovieDescriptionData
}
export interface MovieDescriptionQueryVars {
  id: string
}
export interface MovieCardData {
  id: string,
  poster_path: string,
  title: string,
  genres: string[],
  release_date: string
}

export interface MovieCardQueryData{
  movies: MovieCardData[]
}

export interface MovieCardQueryVars {
  searchType: string,
  filter: string,
  searchValue: string,
}


export interface LocalStorageData {
  selectedMovieGenre: string
}

export type SortFilters = 'rating' | 'release date';
export type SearchType = 'genres' | 'title';
