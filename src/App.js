import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import LoginFormContainer from "./components/LoginFormContainer";
import SignupFormContainer from "./components/SignupFormContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginFormContainer />
        <SignupFormContainer />
      </Provider>
    );
  }
}

export default App;
