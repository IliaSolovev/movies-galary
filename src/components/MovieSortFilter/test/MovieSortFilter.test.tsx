import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MovieSortFilter } from '../MovieSortFilter';
import { Button } from '../..';

it('should render sort filter', () => {
  const component = shallow(<MovieSortFilter currentFilter="rating" movieCount={6} onSetMoviesSortFilter={() => {}} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render sort button', () => {
  const component = shallow(<Button type="sortFilter" active onClick={() => {}}>sort</Button>);
  expect(toJson(component)).toMatchSnapshot();
});
