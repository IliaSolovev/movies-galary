import React from "react";
import {shallow,mount } from "enzyme";
import FilmsNotFound from "../FilmsNotFound";

it('should render films not found', () => {
    const component = shallow(<FilmsNotFound/>);
    expect(component).toMatchSnapshot();
});