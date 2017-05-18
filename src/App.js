import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { FormButton, FormCheckbox, FormHeader, FormInput } from "./components";
import { createUser, loadUser } from "./lib/formService";
import "./App.css";
const uuid = require("uuid/v1")


class App extends Component {
  state = {
    userName: "",
    userCompany: "",
    isChecked: false
  }

  handleNameInputChange = (evt) => {
    this.setState({
      userName: evt.target.value
    })
  }

  handleCompanyInputChange = (evt) => {
    this.setState({
      userCompany: evt.target.value
    })
  }

  handleCheckboxChange = (evt) => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  // TODO: Använd för knapparna
  validateButtonClick = (evt) => {
    // if (validateInputs()) {
    //   this.handleSubmit(evt);
    // }
  }

  // validateInputs = () => {
  //   return !this.state.isChecked
  //     // && this.state.userName.trim().length < 1
  //     // && this.state.userCompany.trim().length < 1)
  // }

  handleSubmit = (evt) => {
    evt.preventDefault();
  }

  submitUser = (evt) => {
    const user = {
      id: uuid(),
      name: this.state.userName,
      company: this.state.userCompany,
      acceptedTerms: this.state.isChecked
    };
    createUser(user);
  }

  // TODO: Fixa klart
  loadUser = (id, evt) => {
    let user = loadUser(id);
    this.setState = {
      userName: user.userName
    }
  }


  render() {
    const headerTexts = [
      { id: 1, name: "Form" },
      { id: 2, name: "Review" },
      { id: 3, name: "Final" }
    ]
    const checkBoxText = "I agree to the terms of service";

    return (
      <Router>
        <div className="App">
          <FormHeader headerTexts={headerTexts}></FormHeader>
          <div className="content">
            <FormInput
              handleInputChange={this.handleNameInputChange}
              handleSubmit={this.handleSubmit}
              placeholder="Your name"
              labelText="Name">
            </FormInput>
            <FormInput
              handleInputChange={this.handleCompanyInputChange}
              handleSubmit={this.handleSubmit}
              placeholder="Your company"
              labelText="Company">
            </FormInput>

            <Route exact={true} path="/" render={() => (
              <div>
                <FormCheckbox
                  handleCheckboxChange={this.handleCheckboxChange}
                  checked={this.state.isChecked}
                  checkBoxText={checkBoxText}
                />
                <Link to="/review">
                  <FormButton buttonText="Review"></FormButton>
                </Link>
              </div>
            )} />

            <Route path="/review" render={() => (
              <div>
                <Link to="/">
                  <FormButton buttonText="Back"></FormButton>
                </Link>
                <Link to="/final">
                  <FormButton handleClick={this.submitUser} buttonText="Submit"></FormButton>
                </Link>
              </div>
            )} />

            <Route path="/final" render={() => (
              <FormCheckbox
                handleCheckboxChange={this.handleCheckboxChange}
                checked={this.state.isChecked}
                checkBoxText={checkBoxText}
              />
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
