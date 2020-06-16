import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FilmsNotFound } from './FilmsNotFound';

it('should render films not found', () => {
  const component = shallow(<FilmsNotFound />);
  expect(toJson(component)).toMatchSnapshot();
});
