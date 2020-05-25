import React from "react";
import {shallow} from "enzyme";
import Header from "../Header";
it('should render header', () => {
    const component = shallow(<Header/>);
    expect(component).toMatchSnapshot();
});