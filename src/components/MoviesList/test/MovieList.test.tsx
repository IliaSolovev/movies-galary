import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MovieCard } from '../MovieCard/MovieCard';
import { MoviesList } from '../MoviesList';
import { movieCard2 } from '../../movieData';

it('should render movie card', () => {
  const component = shallow(<MovieCard movie={movieCard2} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render movie list', () => {
  const component = shallow(<MoviesList sortFilter="rating" movies={[movieCard2, movieCard2]} />);
  expect(toJson(component)).toMatchSnapshot();
});
it('should render 2 movie', () => {

});
