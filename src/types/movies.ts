export interface MovieDescriptionData {
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
export interface MovieCardData {
  id: string,
  poster_path: string,
  title: string,
  genres: string[],
  release_date: string
}

export type SortFilters = 'rating' | 'release date';
export type SearchType = 'genres' | 'title';
