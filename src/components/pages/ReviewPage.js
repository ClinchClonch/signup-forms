import React, { Component } from "react";
import { FormButton, FormHeader, FormInput } from "../";
import { Link } from "react-router-dom";

export class ReviewPage extends Component {
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
          <div className="button-section">
            <div className="back-button">
              <Link to="/">
                <FormButton disabled={!this.props.handleClick} buttonText="Back"></FormButton>
              </Link>
            </div>
          </div>
          <Link to="/final">
            <FormButton disabled={!this.props.handleClick} buttonText="Submit"></FormButton>
          </Link>
        </div>
      </div>
    )
  }
}
