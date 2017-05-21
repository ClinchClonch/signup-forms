import React from "react";
import { FormHeaderItem } from "./";
import { shallow } from "enzyme";

describe("When FormHeaderItem renders", () => {
    const props = "";
    const styles = {};

    const wrapper = shallow(<FormHeaderItem text={props} style={styles} />);

    it("it should render one li", () => {
        expect(wrapper.find("li").length).toBe(1);
    });
});
