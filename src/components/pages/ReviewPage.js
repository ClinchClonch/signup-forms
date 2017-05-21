import React, { Component } from "react";
import { FormButton, FormHeader, FormInput } from "../";
import { headerTexts } from "../../lib/utils"
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class ReviewPage extends Component {
    render() {
      const styles = {
        first: {
          borderBottom: "solid #1874CD",
          color: "#FAFAFA"
        },
        second: {
          borderBottom: "solid #1A237E",
          color: "#1A237E"
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
            <div className="button-section">
              <div className="back-button">
                <Link to="/">
                  <FormButton
                    buttonText="Back">
                  </FormButton>
                </Link>
              </div>
            </div>
            <Link to="/final">
              <FormButton
                disabled={!this.props.disabled}
                handleClick={this.props.handleClick}
                buttonText="Submit">
              </FormButton>
            </Link>
          </div>
        </div>
      )
    }
}

ReviewPage.propTypes = {
    appState: PropTypes.object.isRequired,
    handleNameInputChange: PropTypes.func.isRequired,
    handleCompanyInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func
};
