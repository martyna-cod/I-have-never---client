import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";

class Room extends Component {
  onClick = async () => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/join/${name}`;

    const response = await superagent
      .put(url)
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response, "response test");
  };

  render() {
    const { name } = this.props.match.params;
    const { rooms } = this.props;
    console.log("test rooms", rooms);

    const room = rooms.find(room => room.roomName === name);
    if (!room) {
      return "this room does not exist";
    }
    const { users } = room;
    const list =
      users && users.length ? (
        users.map(user => <p key={user.userName}> {user.userName}</p>)
      ) : (
        <p> no users in this room</p>
      );
    console.log("room test", room);
    console.log(name, "test");
    return (
      <div>
        <h1>{name}</h1>
        <button>I HAVE</button>
        <button>I HAVE NOT</button>
        <button onClick={this.onClick}>JOIN</button>
        {list}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    jwt: state.user,
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(Room);

// baseUrl = "https://evening-scrubland-81754.herokuapp.com";

// state = {
//   questions: [],
//   value: ""
// };
// componentDidMount() {}

// onChange = event => {
//   const { value } = event.target;

//   this.setState({ value: value });
// };
// onSubmit = event => {
//   event.preventDefault();

//   const { value } = this.state;

//   const { name } = this.props.match.params;

//   const url = `${this.baseUrl}/group/${name}`;

//   request.post(url).send({});
// };
