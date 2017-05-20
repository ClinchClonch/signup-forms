import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { FormButton, FormCheckbox, FormHeader, FormInput } from "./components";
import { createUser, loadUser } from "./lib/userService";
import "./App.css";

const uuid = require("uuid/v1")

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: uuid(),
      userName: "",
      userCompany: "",
      isChecked: false
    }
  };

  componentDidMount() {
    let storedId = sessionStorage.getItem("userId");
    if (storedId) {
      loadUser(storedId).then(user => {
        if (user && window.location.pathname.startsWith("/final")) {
          this.setState({
            id: user.id,
            userName: user.name,
            userCompany: user.company,
            isChecked: user.acceptedTerms
          });
        }
      });
    }
  };

  handleNameInputChange = (evt) => {
    if (!window.location.pathname.startsWith("/final")) {
      this.setState({
        userName: evt.target.value
      })
    }
  };

  handleCompanyInputChange = (evt) => {
    if (!window.location.pathname.startsWith("/final")) {
      this.setState({
        userCompany: evt.target.value
      })
    }
  };

  handleCheckboxChange = () => {
    if (!window.location.pathname.startsWith("/final")) {
      this.setState({
        isChecked: !this.state.isChecked
      })
    }
  };

  preventPageRefresh = (evt) => {
    evt.preventDefault();
  };

  submitUser = () => {
    const user = {
      id: this.state.id,
      name: this.state.userName,
      company: this.state.userCompany,
      acceptedTerms: this.state.isChecked
    };
    sessionStorage.setItem("userId", user.id);
    createUser(user);
  };

  renderFinalView = ({ isChecked }) => {
    return (
      <FormCheckbox
        handleCheckboxChange={this.handleCheckboxChange}
        checked={isChecked}
        checkBoxText={"I agree to the terms of service"}
      />
    )
  };

  render() {
    const headerTexts = [
      { id: 1, name: "Form" },
      { id: 2, name: "Review" },
      { id: 3, name: "Final" }
    ];
    const isFormFilledIn =
      this.state.userName.trim().length > 0
      && this.state.userCompany.trim().length > 0
      && this.state.isChecked;

    return (
      <Router>
        <div className="App">
          <FormHeader headerTexts={headerTexts}></FormHeader>
          <div className="content">
            <FormInput
              handleInputChange={this.handleNameInputChange}
              handleSubmit={this.preventPageRefresh}
              placeholder="Your name"
              labelText="Name"
              value={this.state.userName}>
            </FormInput>
            <FormInput
              handleInputChange={this.handleCompanyInputChange}
              handleSubmit={this.preventPageRefresh}
              placeholder="Your company"
              labelText="Company"
              value={this.state.userCompany}>
            </FormInput>

            <Route exact={true} path="/" render={() => (
              <div>
                <FormCheckbox
                  handleCheckboxChange={this.handleCheckboxChange}
                  checked={this.state.isChecked}
                  checkBoxText={"I agree to the terms of service"}
                />
                <Link to="/review">
                  <FormButton disabled={!isFormFilledIn} buttonText="Review"></FormButton>
                </Link>
              </div>
            )} />

            <Route path="/review" render={() => (
              <div>
                <Link to="/final">
                  <FormButton disabled={!isFormFilledIn} handleClick={this.submitUser} buttonText="Submit"></FormButton>
                </Link>
                <Link to="/">
                  <FormButton buttonText="Back"></FormButton>
                </Link>
              </div>
            )} />

            <Route path="/final" render={() => (this.renderFinalView(this.state))} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;