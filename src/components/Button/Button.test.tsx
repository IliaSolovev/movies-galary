import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button } from './Button';

it('should render error', () => {
  const component = shallow(<Button type="sortFilter">search</Button>);
  expect(toJson(component)).toMatchSnapshot();
});
