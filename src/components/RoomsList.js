import React, { Component } from "react";
//import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Rooms extends Component {
  //   state = {
  //     value: ""
  //   };
  //   // url = "https://evening-scrubland-81754.herokuapp.com";
  //   url = "http://localhost:4000";//DONT FORGET IT'S HTTP!! WITHOUT SSSSSS !! BRO!
  //   componentDidUpdate() {
  //     if(this.props.user.length !== 0){
  // this.props.history.push("/question")
  //     }
  //   }

  //   onChange = event => {
  //     const { input } = event.target;
  //     this.setState({value: input});
  //   };

  //   onSubmit = event => {
  //     event.preventDefault();
  //     const { value } = this.state; // const value = this.state.value

  //     const postUrl = `${this.url}/room`;
  //     console.log({ postUrl, roomName: value });
  //     superagent
  //       .post(postUrl)
  //       .send({ roomName: value })
  //       .then(res => {
  //         console.log(res, "res test");
  //       });
  //   };

  render() {
    const { rooms } = this.props;
    //console.log("this.props test:", this.props);
    if (!rooms) {
      return null;
    }

    //console.log("rooms test:", rooms);
    const list = rooms.map(room => (
      <p key={room.name}>
        <Link to={`/room/${room.roomName}`} key={room.roomName} style={{color:"black", fontSize:"30px", fontStyle:"bold"}}>
          {room.roomName}
        </Link>
      </p>
    ));
    return (
      <main>
        <div>
          <h1 style={{fontSize:"40px", fontStyle: "bold"}}>Rooms </h1>
          {list}
        </div>
        {/* <div>
          <form onSubmit={this.onSubmit}>
            <label>Create New a Room:</label>
            <input
              type="text"
              name="roomName"
              placeholder="Room Name"
              value={this.state.value}
              onChange={this.onChange}
            />
            
          </form>
        </div> */}
        <Link to="/question">
          <button type="button">Click Me!</button>
        </Link>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    user: state.user
    // value: state.value
  };
}

export default connect(mapStateToProps)(Rooms);
