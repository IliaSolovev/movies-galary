import React from "react";
import {shallow} from "enzyme";
import MainTitle from "../MainTitle";
import toJson from "enzyme-to-json";
it('should render main title', () => {
    const component = shallow(<MainTitle/>);
    expect(toJson(component)).toMatchSnapshot();
});