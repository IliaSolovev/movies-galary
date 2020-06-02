import React from "react";
import {shallow} from "enzyme";
import Header from "../Header";
import toJson from "enzyme-to-json";
it('should render header', () => {
    const component = shallow(<Header/>);
    expect(toJson(component)).toMatchSnapshot();
});