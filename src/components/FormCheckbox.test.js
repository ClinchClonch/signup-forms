import React from "react";
import { FormCheckbox } from "./";
import { shallow } from "enzyme";

describe("When FormCheckbox renders", () => {
    const wrapper = shallow(<FormCheckbox />);

    it("it should render one .form-checkbox div", () => {
        expect(wrapper.find(".form-checkbox").length).toBe(1);
    });
    it("it should render one label", () => {
        expect(wrapper.find("label").length).toBe(1);
    });
    it("it should render one input", () => {
        expect(wrapper.find("input").length).toBe(1);
    });
});
