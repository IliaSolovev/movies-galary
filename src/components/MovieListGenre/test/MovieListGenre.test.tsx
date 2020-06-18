import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MovieListGenre } from '../MovieListGenre';
import { movieCard2 } from '../../movieData';


it('should render movie list genre', () => {
  const component = shallow(<MovieListGenre movie={movieCard2} />);
  expect(toJson(component)).toMatchSnapshot();
});
