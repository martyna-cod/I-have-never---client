import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import LoginFormContainer from "./components/LoginFormContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginFormContainer />
      </Provider>
    );
  }
}

export default App;
