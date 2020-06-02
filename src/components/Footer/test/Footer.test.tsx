import React from "react";
import {shallow} from "enzyme";
import Footer from "../Footer";
import toJson from "enzyme-to-json";
it('should render footer', () => {
    const component = shallow(<Footer/>);
    expect(toJson(component)).toMatchSnapshot();
});