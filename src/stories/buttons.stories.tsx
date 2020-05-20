import React from "react";
import WhiteSearchButton from "../components/MovieDescription/SearchButton/WhiteSearchButton";
import SearchButton from "../components/SearchMovieForm/SearchButton/SearchButton";
import FilterButton from "../components/MovieListFilter/FilterButton/FilterButton";
import SearchMovieFiltersButton
    from "../components/SearchMovieForm/SearchMovieFilters/SearchMovieFiltersButton/SearchMovieFiltersButton";

export default { title: "Button" };


export const whiteSearchButton = () => <WhiteSearchButton/>;
export const searchButton = () => <SearchButton/>
export const filterButton = () => <FilterButton text={'genre'} isActive={false}/>;
export const activeFilterButton = () => <FilterButton text={'genre'} isActive={true}/>;
export const searchFilterButton = () => <SearchMovieFiltersButton text={'genre'} isActive={false}/>;
export const activeSearchFilterButton = () => <SearchMovieFiltersButton text={'genre'} isActive={true}/>;
