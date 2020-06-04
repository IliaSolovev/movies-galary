import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainTitle from '../MainTitle';

it('should render main title', () => {
  const component = shallow(<MainTitle />);
  expect(toJson(component)).toMatchSnapshot();
});
