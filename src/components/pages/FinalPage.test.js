import React from "react";
import { FinalPage } from "./";
import { shallow } from "enzyme";

describe("When FinalPage renders", () => {
    const appState = {
        userName: "",
        userCompany: ""
    };
    const props = {
        handleNameInputChange: () => { },
        handleCompanyInputChange: () => { },
        handleSubmit: () => { },
        handleCheckboxChange: () => { },
    };
    const wrapper = shallow(
        <FinalPage
            appState={appState}
            handleNameInputChange={props.handleNameInputChange}
            handleCompanyInputChange={props.handleCompanyInputChange}
            handleSubmit={props.handleSubmit}
            handleCheckboxChange={props.handleCheckboxChange}
        />);

    it("it should render two divs", () => {
        expect(wrapper.find("div").length).toBe(2);
    });
    it("it should render one FormHeader", () => {
        expect(wrapper.find("FormHeader").length).toBe(1);
    });
    it("one of the two rendered divs should be a .content div", () => {
        expect(wrapper.find(".content").length).toBe(1);
    });
    it("it should render two FormInputs", () => {
        expect(wrapper.find("FormInput").length).toBe(2);
    });
    it("it should render one FormCheckbox", () => {
        expect(wrapper.find("FormCheckbox").length).toBe(1);
    });
    it("it should not render any FormButtons", () => {
        expect(wrapper.find("FormButton").length).toBe(0);
    });
});
