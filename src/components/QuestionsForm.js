import React, { Component } from "react";

export default class QuestionsForm extends Component {
  state = {
    questions: [],
    value: ""
  };

  render() {
    const { questionsValues, onChangeQuestion } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Questions:</label>
          <label> 1: </label>
          <input
            type="text"
            name="Quesions"
            value={questionsValues["q1"]}
            onChange={event => onChangeQuestion(event, "q1")}
          />
          <label> 2: </label>
          <input
            type="text"
            name="Quesions"
            value={questionsValues["q2"]}
            onChange={event => onChangeQuestion(event, "q2")}
          />
          <label> 3: </label>
          <input
            type="text"
            name="Quesions"
            value={questionsValues["q3"]}
            onChange={event => onChangeQuestion(event, "q3")}
          />
          <label> 4: </label>
          <input
            type="text"
            name="Quesions"
            value={questionsValues["q4"]}
            onChange={event => onChangeQuestion(event, "q4")}
          />
          <label> 5: </label>
          <input
            type="text"
            name="Quesions"
            value={questionsValues["q5"]}
            onChange={event => onChangeQuestion(event, "q5")}
          />

          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}
