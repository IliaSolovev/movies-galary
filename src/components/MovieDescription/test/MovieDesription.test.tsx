import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MovieDescription } from '../MovieDescription';
import { movieDescription } from '../../movieData';


it('should render movie description', () => {
  const component = shallow(<MovieDescription movie={movieDescription} />);
  expect(toJson(component)).toMatchSnapshot();
});
