import { SortFilters } from '../types';

export const getSortFiltersForQuery = (filter: SortFilters): string => (filter === 'release date' ? 'release_date' : 'rating');
