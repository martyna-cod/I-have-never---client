import React, { Component } from 'react';
import Questions from './Questions';
import superagent from 'superagent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

class CreateRoomAndQuestions extends Component {
	constructor() {
		super();
		this.onChangeQuestion = this.onChangeQuestion.bind(this);
	}
	state = {
		roomName: '',
		questions: {
			q1: '',
			q2: '',
			q3: '',
			q4: '',
			q5: ''
		}
	};
	url = "https://ever-i-have-never.herokuapp.com/";

	onChange = (event) => {
		const input = event.target.value;
		this.setState({ roomName: input });
	};

	onChangeQuestion(event, name) {
		const input = event.target.value;
		this.setState({
			...this.state,
			questions: { ...this.state.questions, [name]: input }
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		const { roomName, questions } = this.state;
		this.props.history.push('/rooms');
		const postUrl = `${this.url}/room`;
		superagent
			.post(postUrl)
			.set({ authorization: `Bearer ${this.props.jwt}` })
			.send({ roomName, questions })
			.then((res) => {});

		console.log(this.props.history);
	};

	render() {
		return (
			<div className="create-room-questions">
				<Questions questionsValues={this.state.questions} onChangeQuestion={this.onChangeQuestion} />
				<form onSubmit={this.onSubmit}>
					<Form>
						<div className="rooms-create-input">
							
								<Form.Control
									sm={5}
									size="sm"
									type="text"
									name="roomName"
									placeholder="Enter room name"
									value={this.state.roomName}
									onChange={this.onChange}
								/>
						
						</div>

						<div className="create-room-submit">
							<Button type="Submit" className="btn-dark">
								Create a room
							</Button>
						</div>
						<div className="bla">
							<Link className="link" to="/rooms">
								Go back to the rooms list
							</Link>
						</div>
					</Form>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		jwt: state.user,
		questions: state.question
	};
}

export default connect(mapStateToProps)(CreateRoomAndQuestions);
