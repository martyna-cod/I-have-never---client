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

  sendChoice = async choice => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/choice/${name}`;

    const response = await superagent

      .put(url)
      .send({ iHave: choice })
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response, "Ihave true test");
  };
  nextQuestion = async choice => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/round/${name}`;

    const response = await superagent

      .put(url)
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response, "Ihave true test");
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
    const { questions } = room;

    console.log("questions test:", questions);

    const listQuestion =
      questions && questions.length ? (
        questions.map(question => (
          <p key={question.question}> {question.question}</p>
        ))
      ) : (
        <p> no questions in this room</p>
      );

    const list =
      users && users.length ? (
        users.map(user => <p key={user.userName}> {user.userName}</p>)
      ) : (
        <p> no users in this room</p>
      );
    const drink = users.every(user => user.iHave === null);

    const userList = users.map(user => {
      if (user.iHave === true) {
        return <p>{user.userName} Has to drink🍺 </p>;
      }
    });
  
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={() => this.sendChoice(true)}>I HAVE</button>
        <button onClick={() => this.sendChoice(false)}>I HAVE NOT</button>
        <button onClick={this.onClick}>JOIN</button>
        {list}
        {room.round === null && <h1>{room.questions[0].question}</h1>}
        {room.round !== null && room.round < 5 && (
          <h2>{room.questions[room.round].question}</h2>
        )}
    
        {!drink && userList}
        <button onClick={() => this.nextQuestion()}>Next</button>
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
