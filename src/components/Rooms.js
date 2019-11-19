import React, { Component } from "react";
// import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Rooms extends Component {
  state = {
    rooms: [],
    value: ""
  };
  // url = "https://evening-scrubland-81754.herokuapp.com";
  url = "https://localhost:4000";
  componentDidMount() {}

  // onChange = event => {
  //   const { value } = event.target;
  //   this.setState({ value: value });
  // };

  // onSubmit = event => {
  //   event.preventDefault();
  //   const { value } = this.state; // const value = this.state.hljs-value
  //   const postUrl = `${this.url}/room`;

  //   superagent
  //     .post(postUrl)
  //     .send({ group: value })
  //     .then(res => {
  //       console.log(res, "res test");
  //     });
  // };

  render() {
    const { rooms } = this.props;
    console.log("this.props test:", this.props);
    if (!rooms) {
      return null;
    }

    console.log("rooms test:", rooms);
    const list = rooms.map(room => (
      <p key={room.name}>
        <Link to={`/room/${room.roomName}`} key={room.roomName}>
          {room.roomName}
        </Link>
      </p>
    ));
    return (
      <main>
        <h1>Rooms</h1>
        {list}
      </main>
      // <div>
      //   <form onSubmit={this.props.onSubmit}>
      //     <label>Create New a Group:</label>
      //     <input
      //       type="text"
      //       name="groupName"
      //       placeholder="Group Name"
      //       value={this.props.values.groupName}
      //       onChange={this.props.onChange}
      //     />
      //     <button type="Submit">Submit</button>
      //   </form>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.room
  };
}

export default connect(mapStateToProps)(Rooms);
