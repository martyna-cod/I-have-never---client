import React, { Component } from "react";
import QuestionsForm from "./QuestionsForm";
import superagent from "superagent";
import { connect } from "react-redux";

class CreateRoomAndQuestions extends Component {
  constructor() {
    super();
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
  }
  state = {
    roomName: "",
    questions: {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: ""
    }
  };
  // url = "https://evening-scrubland-81754.herokuapp.com";
  url = "http://localhost:4000"; //DONT FORGET IT'S HTTP!! WITHOUT SSSSSS !! BRO!

  onChange = event => {
    const input = event.target.value;
    this.setState({ roomName: input });
  };

  onChangeQuestion(event, name) {
    const input = event.target.value;
    this.setState({
      ...this.state,
      questions: { ...this.state.questions, [name]: input }
    });
    console.log(this.state.questions, "where???");
  }

  onSubmit = event => {
    console.log(this.state.roomName);
    event.preventDefault();
    const { roomName, questions } = this.state; // const value = this.state.value

    const postUrl = `${this.url}/room`;
    console.log({ postUrl, roomName });
    superagent
      .post(postUrl)
      .send({ roomName, questions })
      .then(res => {
        console.log(res, "res test");
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Create New a Room:</label>
          <input
            type="text"
            name="roomName"
            placeholder="Room Name"
            value={this.state.roomName}
            onChange={this.onChange}
          />
          <button type="Submit">Submit</button>
        </form>
        <QuestionsForm
          questionsValues={this.state.questions}
          onChangeQuestion={this.onChangeQuestion}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
    // value: state.value
  };
}

export default connect(mapStateToProps)(CreateRoomAndQuestions);
