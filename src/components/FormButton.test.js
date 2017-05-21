import React from "react";
import { FormButton } from "./";
import { shallow } from "enzyme";

describe("When FormButton renders", () => {
    const wrapper = shallow(<FormButton />);

    it("it should render one button", () => {
        expect(wrapper.find("button").length).toBe(1);
    });
});
