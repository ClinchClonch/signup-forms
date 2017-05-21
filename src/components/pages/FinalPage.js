import React, { Component } from "react";
import { FormCheckbox, FormHeader, FormInput } from "../";
import { headerTexts } from "../../lib/utils"
import PropTypes from "prop-types";

export class FinalPage extends Component {
    render() {
      const headerStyles = {
        first: {
          borderBottom: "solid #1874CD",
          color: "#FAFAFA"
        },
        second: {
          borderBottom: "solid #1874CD",
          color: "#FAFAFA"
        },
        third: {
          borderBottom: "solid #1A237E",
          color: "#1A237E"
        }
      };

      return (
        <div>
          <FormHeader
            headerTexts={headerTexts("Form", "Review", "Final")}
            style={headerStyles}>
          </FormHeader>
          <div className="content">
            <FormInput
              handleInputChange={this.props.handleNameInputChange}
              handleSubmit={this.props.preventPageRefresh}
              labelText="Name"
              value={this.props.appState.userName}>
            </FormInput>
            <FormInput
              handleInputChange={this.props.handleCompanyInputChange}
              handleSubmit={this.props.preventPageRefresh}
              labelText="Company"
              value={this.props.appState.userCompany}>
            </FormInput>
            <FormCheckbox
              handleCheckboxChange={this.props.handleCheckboxChange}
              checked={this.props.appState.isChecked}
              checkBoxText={"I agree to the terms of service"}
            />
          </div>
        </div>
      )
    }
}

FinalPage.propTypes = {
    appState: PropTypes.object.isRequired,
    handleNameInputChange: PropTypes.func.isRequired,
    handleCompanyInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired
};
