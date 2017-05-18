import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { FormButton, FormCheckbox, FormHeader, FormInput } from "./components";
import { createUser, loadUser } from "./lib/userService";
import "./App.css";

const uuid = require("uuid/v1")

class App extends Component {
  state = {
    id: uuid(),
    userName: "",
    userCompany: "",
    isChecked: false,
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

  handleCheckboxChange = () => {
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

  preventPageRefresh = (evt) => {
    evt.preventDefault();
  }

  submitUser = () => {
    const user = {
      id: this.state.id,
      name: this.state.userName,
      company: this.state.userCompany,
      acceptedTerms: this.state.isChecked
    };
    this.setState({
      id: user.id
    })
    createUser(user);
  }

  // TODO: Fixa klart
  getStoredUser = (id) => {
    let user = loadUser("497870b0-3c11-11e7-ac54-c1affd270ae5");
    console.log("loadedUser:")
    console.log(user)
    if (user) {
      this.setState = {
        id: user.id,
        userName: user.name,
        userCompany: user.company,
        acceptedTerms: user.acceptedTerms
      }
      console.log("state:")
      console.log(this.state);
    }
  }

  renderFinalView = () => {
    let storedId = localStorage.getItem("userId");
    if (storedId) {
      console.log(storedId)
      this.getStoredUser(storedId);
      localStorage.setItem("userId", this.state.id)
    }

    return (
      <FormCheckbox
        handleCheckboxChange={this.handleCheckboxChange}
        checked={this.state.isChecked}
        checkBoxText={"I agree to the terms of service"}
      />)
  }

  render() {
    const headerTexts = [
      { id: 1, name: "Form" },
      { id: 2, name: "Review" },
      { id: 3, name: "Final" }
    ]

    return (
      <Router>
        <div className="App">
          <FormHeader headerTexts={headerTexts}></FormHeader>
          <div className="content">
            <FormInput
              handleInputChange={this.handleNameInputChange}
              handleSubmit={this.preventPageRefresh}
              placeholder="Your name"
              labelText="Name">
            </FormInput>
            <FormInput
              handleInputChange={this.handleCompanyInputChange}
              handleSubmit={this.preventPageRefresh}
              placeholder="Your company"
              labelText="Company">
            </FormInput>

            <Route exact={true} path="/" render={() => (
              <div>
                <FormCheckbox
                  handleCheckboxChange={this.handleCheckboxChange}
                  checked={this.state.isChecked}
                  checkBoxText={"I agree to the terms of service"}
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

            <Route path="/final" render={() => (this.renderFinalView())} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
