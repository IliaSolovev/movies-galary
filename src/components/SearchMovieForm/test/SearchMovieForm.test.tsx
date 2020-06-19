import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchField } from '../Field/SearchField';
import { SearchMovieFilters } from '../SearchMovieFilters/SearchMovieFilters';
import { SearchMovieForm } from '../SearchMovieForm';
import { Button } from '../..';

it('should render search field', () => {
  const component = shallow(<SearchField value="asd" onChange={() => {}} />);
  expect(toJson(component)).toMatchSnapshot();
});

it('should render search movie filter button', () => {
  const component = shallow(<Button onClick={() => {}} active type="search">search</Button>);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render search movie filter ', () => {
  const component = mount(<SearchMovieFilters searchType="genres" onSelectType={() => {}} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render search movie form ', () => {
  const component = mount(<SearchMovieForm
    searchType="title"
    fieldValue="asd"
    onFieldChange={() => {}}
    onSelectType={() => {}}
    onSearch={() => {}}
  />);
  expect(toJson(component)).toMatchSnapshot();
});
