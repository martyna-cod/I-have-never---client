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
	url = 'http://localhost:4000'; 

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
    this.props.history.push("/rooms")
		const postUrl = `${this.url}/room`;
		superagent
			.post(postUrl)
			.set({ authorization: `Bearer ${this.props.jwt}` })
			.send({ roomName, questions })
			.then((res) => {
      });
     
      console.log(this.props.history)
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<Form className="create-room">
						<Form.Label style={{fontFamily: "'Anton', sans-serif ", fontSize: "25px" }}>Create a new room</Form.Label>
          	<Form.Control style={{fontFamily: "'Anton', sans-serif "}}
							sm={5}
							size="sm"
							type="text"
							name="roomName"
							placeholder ="Room name"
							value={this.state.roomName}
							onChange={this.onChange}
						/>
						<Questions questionsValues={this.state.questions} onChangeQuestion={this.onChangeQuestion} />
					  <Button style={{fontFamily: "'Anton', sans-serif ", fontSize: "15px", width: "300px", height: "35px", padding: "2px" }} type="Submit" className="btn-lg btn-dark btn-block">
							Create new room
            </Button> 
          
            <Link style={{fontFamily: "'Anton', sans-serif ", fontSize: "30px", color: "black"}} to="/rooms">Rooms</Link>
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
