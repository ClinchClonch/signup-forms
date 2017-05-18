import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { FormButton, FormCheckbox, FormHeader, FormInput } from "./components"
import "./App.css";

class App extends Component {
  state = {
    textInput: "",
    isChecked: false
  }

  handleInputChange = (evt) => {
    this.setState({
      textInput: evt.target.value
    })
  }

  handleCheckboxChange = (evt) => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

// TODO: Använd för knapparna
  validateButtonClick = (evt) => {
    if (!this.state.isChecked) {
      this.handleSubmit(evt);
    }
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
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
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              placeholder="Your name"
              labelText="Name">
            </FormInput>
            <FormInput
              handleInputChange={this.handleInputChange}
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
                  <FormButton onclick={this.attemptButtonActivation} buttonText="Review"></FormButton>
                </Link>
              </div>
            )} />

            <Route path="/review" render={() => (
              <div>
                <Link to="/">
                  <FormButton buttonText="Back"></FormButton>
                </Link>
                <Link to="/final">
                  <FormButton buttonText="Submit"></FormButton>
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
