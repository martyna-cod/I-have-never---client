import React, { Component } from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { createUser } from "../actions/user";

class SignupFormContainer extends Component {
  state = { userName: "", password: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createUser({
      userName: this.state.userName,
      password: this.state.password
    });
  };

  render() {
    return (
      <div>
        <SignupForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

export default connect(null, { createUser })(SignupFormContainer);
