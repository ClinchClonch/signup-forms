import React from "react";
import { FormInput } from "./";
import { shallow } from "enzyme";

describe("When FormInput renders", () => {
    const props = { value: "" };
    const styles = {};

    const wrapper = shallow(<FormInput value={props.value} style={styles} />);

    it("it should render one .form-input div", () => {
        expect(wrapper.find(".form-input").length).toBe(1);
    });
    it("it should render one label", () => {
        expect(wrapper.find("label").length).toBe(1);
    });
    it("it should render one form", () => {
        expect(wrapper.find("form").length).toBe(1);
    });
    it("it should render one input", () => {
        expect(wrapper.find("input").length).toBe(1);
    });
});
