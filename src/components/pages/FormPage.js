import React, { Component } from "react";
import { FormButton, FormCheckbox, FormHeader, FormInput } from "../";
import { headerTexts } from "../../lib/utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class FormPage extends Component {
    render() {
        const styles = {
            first: {
                borderBottom: "solid #1A237E",
                color: "#1A237E"
            },
            second: {
                borderBottom: "solid #1874CD",
                color: "#FAFAFA"
            },
            third: {
                borderBottom: "solid #1874CD",
                color: "#FAFAFA"
            }
        };

        return (
          <div>
            <FormHeader
              headerTexts={headerTexts("Form", "Review", "Final")}
              style={styles}>
            </FormHeader>
            <div className="content">
              <FormInput
                handleInputChange={this.props.handleNameInputChange}
                handleSubmit={this.props.preventPageRefresh}
                placeholder="Your name"
                labelText="Name"
                value={this.props.appState.userName}>
              </FormInput>
              <FormInput
                handleInputChange={this.props.handleCompanyInputChange}
                handleSubmit={this.props.preventPageRefresh}
                placeholder="Your company"
                labelText="Company"
                value={this.props.appState.userCompany}>
              </FormInput>
              <FormCheckbox
                handleCheckboxChange={this.props.handleCheckboxChange}
                checked={this.props.appState.isChecked}
                checkBoxText={"I agree to the terms of service"}
              />
              <Link to="/review">
                <FormButton
                  disabled={!this.props.disabled}
                  buttonText="Review">
                </FormButton>
              </Link>
            </div>
          </div>
        );
    }
}

FormPage.propTypes = {
    appState: PropTypes.object.isRequired,
    handleNameInputChange: PropTypes.func.isRequired,
    handleCompanyInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired
};
