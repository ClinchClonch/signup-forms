import React from "react";
import { ReviewPage } from "./ReviewPage";
import { shallow } from "enzyme";

describe("When ReviewPage renders", () => {
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
        <ReviewPage
            appState={appState}
            handleNameInputChange={props.handleNameInputChange}
            handleCompanyInputChange={props.handleCompanyInputChange}
            handleSubmit={props.handleSubmit}
            handleCheckboxChange={props.handleCheckboxChange}
            disabled={props.disabled}
        />);

    it("it should render four divs", () => {
        expect(wrapper.find("div").length).toBe(4);
    });
    it("it should render one FormHeader", () => {
        expect(wrapper.find("FormHeader").length).toBe(1);
    });
    it("one of the rendered divs should be a .content div", () => {
        expect(wrapper.find(".content").length).toBe(1);
    });
    it("one of the rendered divs should be a .button-section div", () => {
        expect(wrapper.find(".button-section").length).toBe(1);
    });
    it("one of the rendered divs should be a .back-button-section div", () => {
        expect(wrapper.find(".back-button").length).toBe(1);
    });
    it("it should render two FormInputs", () => {
        expect(wrapper.find("FormInput").length).toBe(2);
    });
    it("it should render two FormButtons", () => {
        expect(wrapper.find("FormButton").length).toBe(2);
    });
    it("it should render two Links", () => {
        expect(wrapper.find("Link").length).toBe(2);
    });
    it("it should not render a FormCheckbox", () => {
        expect(wrapper.find("FormCheckbox").length).toBe(0);
    });
});
