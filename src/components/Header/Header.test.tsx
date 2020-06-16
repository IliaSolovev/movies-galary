import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from './Header';

it('should render header', () => {
  const component = shallow(<Header> Header </Header>);
  expect(toJson(component)).toMatchSnapshot();
});
