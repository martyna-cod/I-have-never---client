import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import LoginFormContainer from "./components/LoginFormContainer";
import SignupFormContainer from "./components/SignupFormContainer";
import Room from "./components/Room";
import RoomsList from "./components/RoomsList";
//import QuestionsForm from "./components/QuestionsForm";
import CreateRoomAndQuestions from "./components/CreateRoomAndQuestions";


// import { login } from "./actions/user";
// import QuestionsForm from "./components/QuestionsForm";
// import { Link } from "react-router-dom";

class App extends Component {
  stream = new EventSource("http://localhost:4000/stream");
  state = {
    rooms: []
  };
  componentDidMount() {
    this.stream.onmessage = event => {
      console.log(event);
      const { data } = event; // const data = event.data

      const parsed = JSON.parse(data);
      console.log("parsed tested", parsed);
      this.props.dispatch(parsed);
    };
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/rooms" component={RoomsList} />
        <Route path="/question" component={CreateRoomAndQuestions}/>
        <Route path="/room/:name" component={Room} />
        {/* <Route exact  component={QuestionsForm} /> */}
        <Route exact path="/" component={LoginFormContainer} />
        <Route exact path="/" component={SignupFormContainer} />
        {/* <Route
          exact
          path="/"
          component={() => <Link to={"/rooms"}>Rooms</Link>}
        /> */}
      </Fragment>
    );
  }
}

// {this.state.rooms.map((room)=> { return <p key={room.id}>{room.roomName}<p/>})}

export default connect()(App);

// {/* if(){
//   <LoginFormContainer />
//   <SignupFormContainer />
// }
// else{ */}
// // <Route exact path="/" component={Rooms} />
// // <Route path="/room/:name" component={Room} />
// {/* } */}

// this.props.dispatch({
//   type: "ROOMS",
//   payload: rooms
// });
