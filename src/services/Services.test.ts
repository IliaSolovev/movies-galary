import { getSortFiltersForQuery } from './getSortFiltersForQuery';

describe('get sort filter for query', () => {
  it('should return release_date string', () => {
    expect(getSortFiltersForQuery('release date')).toEqual('release_date');
  });
  it('should return rating string', () => {
    expect(getSortFiltersForQuery('rating')).toEqual('rating');
  });
});
