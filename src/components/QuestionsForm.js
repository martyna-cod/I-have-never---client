import React, { Component } from "react";

export default class QuestionsForm extends Component {
  state = {
    questions: [],
    value: ""
  };
  componentDidMount() {}

  onChange = (event, number) => {
    const { value } = event.target;
    this.setState({ [number]: value });
  };

  onSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>Questions:</label>
          <label> 1: </label>
          <input
            type="text"
            name="Quesions"
            value={this.props.values.questions}
            onChange={event => this.props.onChange(event, 1)}
          />
          <label> 2: </label>
          <input
            type="text"
            name="Quesions"
            value={this.props.values.questions}
            onChange={event => this.props.onChange(event, 2)}
          />
          <label> 3: </label>
          <input
            type="text"
            name="Quesions"
            value={this.props.values.questions}
            onChange={event => this.props.onChange(event, 3)}
          />
          <label> 4: </label>
          <input
            type="text"
            name="Quesions"
            value={this.props.values.questions}
            onChange={event => this.props.onChange(event, 4)}
          />
          <label> 5: </label>
          <input
            type="text"
            name="Quesions"
            value={this.props.values.questions}
            onChange={event => this.props.onChange(event, 5)}
          />

          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}
