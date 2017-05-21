import React from "react";
import { FormHeader } from "./";
import { shallow } from "enzyme";

describe("When FormHeader renders", () => {
    const props = { headerTexts: {} };
    const styles = {};

    const wrapper = shallow(<FormHeader headerTexts={props.headerTexts} style={styles} />);

    it("it should render one .form-header div", () => {
        expect(wrapper.find(".form-header").length).toBe(1);
    });
    it("it should render one ul", () => {
        expect(wrapper.find("ul").length).toBe(1);
    });
    it("it should render three FormHeaderItems", () => {
        expect(wrapper.find("FormHeaderItem").length).toBe(3);
    });
});
