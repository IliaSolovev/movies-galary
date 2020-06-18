import React, { useState } from 'react';

import { useQuery } from '@apollo/react-hooks';
import {
  Footer, Header, Logo, MoviesList, MovieSortFilter, SearchMovieForm,
} from '../../components';
import { GET_MOVIES } from '../../queries';
import {
  SortFilters, SearchType, MovieCardData, MovieCardQueryVars, MovieCardQueryData,
} from '../../types';
import { getSortFiltersForQuery } from '../../services';

import style from '../styles.module.scss';

export const FindMovie: React.FC = () => {
  const [fieldValue, setFieldValue] = useState<string>('');
  const [searchType, setSearchType] = useState<SearchType>('genres');
  const [sortFilter, setSortFilter] = useState<SortFilters>('rating');
  const [fetchVariables, setFetchVariables] = useState({
    searchType,
    filter: getSortFiltersForQuery(sortFilter),
    searchValue: fieldValue,
  });
  const { loading, data } = useQuery<MovieCardQueryData, MovieCardQueryVars>(GET_MOVIES, {
    variables: { ...fetchVariables },
  });

  const onSearch = () => {
    setFetchVariables({
      searchType,
      filter: getSortFiltersForQuery(sortFilter),
      searchValue: fieldValue,
    });
    setFieldValue('');
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className={style.layout}>
        <Header>
          <Logo />
        </Header>
        <SearchMovieForm
          fieldValue={fieldValue}
          searchType={searchType}
          onFieldChange={setFieldValue}
          onSelectType={setSearchType}
          onSearch={onSearch}
        />
      </div>

      <MovieSortFilter
        movieCount={data.movies.length}
        onSetMoviesSortFilter={setSortFilter}
        currentFilter={sortFilter}
      />
      <MoviesList movies={data.movies} sortFilter={sortFilter} />
      <Footer />
    </div>
  );
};
