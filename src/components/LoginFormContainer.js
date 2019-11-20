import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/user";

class LoginFormContainer extends Component {
  state = { userName: "", password: "" };

  componentDidUpdate() {
    if(this.props.user.length !== 0){
this.props.history.push("/rooms")
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.userName, this.state.password);
  };

  render() {
    return (
      <div>
        <LoginForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps= state =>({
  user: state.user
})

export default connect(mapStateToProps, { login })(LoginFormContainer);
