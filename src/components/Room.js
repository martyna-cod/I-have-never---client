import React, { Component } from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
const baseUrl = '../constants';

class Room extends Component {
	onClick = async () => {
		const { jwt, match } = this.props;
		const { name } = match.params;
		const url = `${baseUrl}/join/${name}`;

		const response = await superagent.put(url).set({ authorization: `Bearer ${jwt}` });
		console.log(response, 'response test');
	};

	sendChoice = async (choice) => {
		const { jwt, match } = this.props;
		const { name } = match.params;
		const url = `${baseUrl}/choice/${name}`;

		const response = await superagent.put(url).send({ iHave: choice }).set({ authorization: `Bearer ${jwt}` });
		console.log(response, 'Ihave true test');
	};
	nextQuestion = async (choice) => {
		const { jwt, match } = this.props;
		const { name } = match.params;
		const url = `${baseUrl}/round/${name}`;

		const response = await superagent.put(url).set({ authorization: `Bearer ${jwt}` });
	};

	render() {
		const { name } = this.props.match.params;
		const { rooms } = this.props;

		const room = rooms.find((room) => room.roomName === name);
		if (!room) {
			return 'this room does not exist';
		}
		const { users } = room;
		const { questions } = room;

		const listQuestion =
			questions && questions.length ? (
				questions.map((question) => <p key={question.question}> {question.question}</p>)
			) : (
				<p> no questions in this room</p>
			);

		const list =
			users && users.length ? (
				users.map((user) => <p key={user.userName}> {user.userName}</p>)
			) : (
				<p> no users in this room</p>
			);
		const drink = users.every((user) => user.iHave === null);

		const userList = users.map((user) => {
			if (user.iHave === true) {
				return <div className="has-to-drink"> <p>{user.userName} Has to drink🍺 </p> </div> 
			}
		});

		return (
			<div className="game-room"> 
				<div className="game-room-players">
				<h2>Players</h2>
				<h5> {list}</h5>
				 </div>
				 <div className="room-name-and-button">
				<div className="game-room-active-room">
					Room: {name}. Join the room if you want to play
				</div>
				<div className="join-room-button"> 
					<Button
						
						type="Submit"
						className="btn-dark btn-join btn-block"
						onClick={this.onClick} 
					>
						Join the room
					</Button>
				</div>
				</div>
				<div className="game-room-question"
				
				>
					{room.round === null && <h1>{room.questions[0].question}</h1>}
					{room.round !== null && room.round < 5 && <h2>{room.questions[room.round].question}</h2>}
				</div>	
				
				<div className="game-room-buttons">																																																																																																																																																																																																																																																																																																																																																																																																																																																																																	
					<Button
				
						type="Submit"
						className="btn-lg btn-dark btn-block"
						onClick={() => this.sendChoice(true)}
					>
						I HAVE
					</Button>
				
			
					<Button
						type="Submit"
						className="btn-lg btn-dark btn-block"
						onClick={() => this.sendChoice(false)}
					>
						I HAVE NOT
					</Button>
				
			
					{!drink && userList}
					<Button
						type="Submit"
						className="btn-lg btn-dark btn-block"
						onClick={() => this.nextQuestion()}
					>
						Next
					</Button>
					</div>
					
			
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