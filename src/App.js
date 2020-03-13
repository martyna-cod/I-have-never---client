import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Room from "./components/Room";
import RoomsList from "./components/RoomsList";
import HomePage from "./components/HomePage"
import SignupFormContainer from "./components/SignupFormContainer"
import LoginFormContainer from "./components/LoginFormContainer"
import CreateRoomAndQuestions from "./components/CreateRoomAndQuestions";
 import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");
  state = {
    rooms: []
  };
  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const parsed = JSON.parse(data);
      this.props.dispatch(parsed);
    };
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/rooms" component={RoomsList} />
        <Route path="/question" component={CreateRoomAndQuestions}/>
        <Route path="/room/:name" component={Room} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-up" component={SignupFormContainer} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/login" component={LoginFormContainer} />
      </Fragment>
    );
  }
}


export default connect()(App);

