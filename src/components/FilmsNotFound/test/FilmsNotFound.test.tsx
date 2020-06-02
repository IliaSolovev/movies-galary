import React from "react";
import { shallow } from "enzyme";
import FilmsNotFound from "../FilmsNotFound";
import toJson from "enzyme-to-json";

it("should render films not found", () => {
	const component = shallow(<FilmsNotFound/>);
	expect(toJson(component)).toMatchSnapshot();
});