import React, { Component } from "react";
import "./App.css";
import { FormHeader } from "./components/FormHeader"
import { FormInput } from "./components/FormInput"
import { FormCheckbox } from "./components/FormCheckbox"
import { FormButton } from "./components/FormButton"

class App extends Component {
  state = {
    textInput: ""
  }

  handleInputChange = (evt) => {
    this.setState({
      textInput: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
  }

  render() {
    const headerTexts = [
      {id: 1, name: "Form"},
      {id: 2, name: "Review"},
      {id: 3, name: "Final"}
    ]

    return (
      <div className="App">
        <FormHeader headerTexts={headerTexts}></FormHeader>
        <FormInput handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} labelText="Name"></FormInput>
        <FormInput handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} labelText="Company"></FormInput>
        <FormCheckbox checkBoxText="I agree to the terms of service" />
        <FormButton buttonText="Submit"></FormButton>
      </div>
    );
  }
}

export default App;
