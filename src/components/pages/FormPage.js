import React, { Component } from "react";
import { FormButton, FormCheckbox, FormHeader, FormInput } from "../";
import { Link } from "react-router-dom";

export class FormPage extends Component {
  render() {
    return (
      <div>
        <FormHeader headerTexts={this.props.headerTexts}></FormHeader>
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
            <FormButton disabled={!this.props.handleClick} buttonText="Review"></FormButton>
          </Link>
        </div>
      </div>
    )
  }
}
