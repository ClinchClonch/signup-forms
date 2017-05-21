import React from "react";
import { FormPage } from "./";
import { shallow } from "enzyme";

describe("When FormPage renders", () => {
    const appState = {
        userName: "Bob",
        userCompany: "Foo Company"
    };
    const props = {
        handleNameInputChange: () => { },
        handleCompanyInputChange: () => { },
        handleSubmit: () => { },
        handleCheckboxChange: () => { },
        disabled: false
    };
    const wrapper = shallow(
        <FormPage
            appState={appState}
            handleNameInputChange={props.handleNameInputChange}
            handleCompanyInputChange={props.handleCompanyInputChange}
            handleSubmit={props.handleSubmit}
            handleCheckboxChange={props.handleCheckboxChange}
            disabled={props.disabled}
        />);

    it("it should render two divs", () => {
        expect(wrapper.find("div").length).toBe(2);
    });
    it("it should render one FormHeader", () => {
        expect(wrapper.find("FormHeader").length).toBe(1);
    });
    it("one of the rendered divs should be a .content div", () => {
        expect(wrapper.find(".content").length).toBe(1);
    });
    it("it should render two FormInputs", () => {
        expect(wrapper.find("FormInput").length).toBe(2);
    });
    it("it should render one FormButton", () => {
        expect(wrapper.find("FormButton").length).toBe(1);
    });
    it("it should render one Link", () => {
        expect(wrapper.find("Link").length).toBe(1);
    });
    it("it should render one FormCheckbox", () => {
        expect(wrapper.find("FormCheckbox").length).toBe(1);
    });
});
