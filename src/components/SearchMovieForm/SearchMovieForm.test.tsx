import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchField } from './Field/SearchField';
import { SearchMovieFilters } from './SearchMovieFilters/SearchMovieFilters';
import { SearchMovieForm } from './SearchMovieForm';
import { Button } from '../index';

const data = {
  id: 337167,
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: '2018-02-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview: 'Believing they have left behind shadowy figures from their past,'
      + ' newlyweds Christian and Ana fully embrace an inextricable connection and shared life of'
      + ' luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar '
      + 'stability, new threats could jeopardize their happy ending before it even begins.',
  budget: 55000000,
  revenue: 136906000,
  genres: [
    'Drama',
    'Romance',
  ],
  runtime: 106,
};

it('should render search field', () => {
  const component = shallow(<SearchField value="asd" onChange={() => {}} />);
  expect(toJson(component)).toMatchSnapshot();
});

it('should render search movie filter button', () => {
  const component = shallow(<Button onClick={() => {}} active type="search">search</Button>);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render search movie filter ', () => {
  const component = mount(<SearchMovieFilters searchType="genre" onSelectType={() => {}} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render search movie form ', () => {
  const component = mount(<SearchMovieForm searchType="title" fieldValue="asd" onFieldChange={() => {}} onSelectType={() => {}} onSearch={() => {}} />);
  expect(toJson(component)).toMatchSnapshot();
});
