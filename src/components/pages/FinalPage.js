import React, { Component } from "react";
import { FormCheckbox, FormHeader, FormInput } from "../";

export class FinalPage extends Component {
  render() {
    return (
      <div>
        <FormHeader headerTexts={this.props.headerTexts}></FormHeader>
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
