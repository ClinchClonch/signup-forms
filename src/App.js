import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

import "./App.css";
import { FormHeader } from "./components/FormHeader"
import { FormInput } from "./components/FormInput"
import { FormCheckbox } from "./components/FormCheckbox"
import { FormButton } from "./components/FormButton"

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

  handleSubmit = (evt) => {
    evt.preventDefault();
  }

  render() {
    const headerTexts = [
      { id: 1, name: "Form" },
      { id: 2, name: "Review" },
      { id: 3, name: "Final" }
    ]

    const Review = () => {
      return (
        <div>
          <Link to="/">
            <FormButton buttonText="Back"></FormButton>
          </Link>
          <Link to="/final">
            <FormButton buttonText="Submit"></FormButton>
          </Link>
        </div>
      )
    }

    const Final = () => {
      return (
        <FormCheckbox handleCheckboxChange={this.handleCheckboxChange} checked={this.state.isChecked} checkBoxText="I agree to the terms of service" />
      )
    }

    return (
      <Router>
        <div className="App">
          <FormHeader headerTexts={headerTexts}></FormHeader>
          <div className="content">
            <FormInput handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} labelText="Name"></FormInput>
            <FormInput handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} labelText="Company"></FormInput>

            <Route exact={true} path="/" render={() => (
              <div>
                <FormCheckbox handleCheckboxChange={this.handleCheckboxChange} checked={this.state.isChecked} checkBoxText="I agree to the terms of service" />
                <Link to="/review">
                  <FormButton buttonText="Review"></FormButton>
                </Link>
              </div>
            )} />

            <Route path="/review" component={Review} />
            <Route path="/final" component={Final} />
          </div>
        </div>
      </Router>
    );
  }
}





export default App;
