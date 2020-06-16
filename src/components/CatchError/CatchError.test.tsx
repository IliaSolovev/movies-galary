import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CatchError } from './CatchError';

it('should render error', () => {
  const component = shallow(<CatchError />);
  expect(toJson(component)).toMatchSnapshot();
});
