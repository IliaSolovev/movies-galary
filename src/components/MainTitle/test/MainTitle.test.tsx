import React from "react";
import {shallow} from "enzyme";
import MainTitle from "../MainTitle";
it('should render main title', () => {
    const component = shallow(<MainTitle/>);
    expect(component).toMatchSnapshot();
});