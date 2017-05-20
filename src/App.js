import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FormPage, ReviewPage, FinalPage } from "./components/pages";
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

  isFormFilledIn = () => {
    return this.state.userName.trim().length > 0
      && this.state.userCompany.trim().length > 0
      && this.state.isChecked;
  }

  componentDidMount = () => {
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
    this.setState({
      userName: evt.target.value
    })
  };

  handleCompanyInputChange = (evt) => {
    this.setState({
      userCompany: evt.target.value
    })
  };

  handleCheckboxChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
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

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" render={() => (
            <FormPage
              appState={this.state}
              handleNameInputChange={this.handleNameInputChange}
              handleCompanyInputChange={this.handleCompanyInputChange}
              handleSubmit={this.preventPageRefresh}
              handleCheckboxChange={this.handleCheckboxChange}
              disabled={this.isFormFilledIn()}
            ></FormPage>
          )} />

          <Route exact={true} path="/review" render={() => (
            <ReviewPage
              appState={this.state}
              handleNameInputChange={this.handleNameInputChange}
              handleCompanyInputChange={this.handleCompanyInputChange}
              handleSubmit={this.preventPageRefresh}
              handleClick={this.submitUser}
              disabled={this.isFormFilledIn()}
            ></ReviewPage>
          )} />

          <Route exact={true} path="/final" render={() => (
            <FinalPage
              appState={this.state}
              handleNameInputChange={() => { }}
              handleCompanyInputChange={() => { }}
              handleSubmit={this.preventPageRefresh}
              handleCheckboxChange={() => { }}
              disabled={this.isFormFilledIn()}
            ></FinalPage>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
