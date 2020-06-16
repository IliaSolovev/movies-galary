import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Logo } from './Logo';

it('should render main title', () => {
  const component = shallow(<Logo />);
  expect(toJson(component)).toMatchSnapshot();
});
