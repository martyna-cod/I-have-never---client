import React, { Component } from 'react';
import superagent from 'superagent';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class Room extends Component {
	onClick = async () => {
		const { jwt, match } = this.props;
		const { name } = match.params;
		const url = `http://localhost:4000/join/${name}`;

		const response = await superagent.put(url).set({ authorization: `Bearer ${jwt}` });
		console.log(response, 'response test');
	};

	sendChoice = async (choice) => {
		const { jwt, match } = this.props;
		const { name } = match.params;
		const url = `http://localhost:4000/choice/${name}`;

		const response = await superagent.put(url).send({ iHave: choice }).set({ authorization: `Bearer ${jwt}` });
		console.log(response, 'Ihave true test');
	};
	nextQuestion = async (choice) => {
		const { jwt, match } = this.props;
		const { name } = match.params;
		const url = `http://localhost:4000/round/${name}`;

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
				return <div style={{marginTop: "110px"}}><p style={{fontSize: "30px"}}> {user.userName} Has to drink🍺 </p> </div> 
			}
		});

		return (
			<div>


				<div style={{paddingTop: "25px"}}> <h3 style={{fontFamily: "'Anton', sans-serif", fontSize: "25px"}}>Players</h3>
				<h2 style={{fontFamily: "'Anton', sans-serif", fontSize: "20px"}}> {list}</h2>
				 </div>
				<div>
					<h1 style={{ textAlign: 'center', marginTop: '70px' }}>{name}</h1>
				</div>
				<div>
					<Button
						style={{
							fontFamily: "'Anton', sans-serif",
							height: '35px',
							padding: "1.5px",
							width: '200px',
							margin: 'auto',
						}}
						type="Submit"
						className="btn-lg btn-dark btn-block"
						onClick={this.onClick}
					>
						Join the room
					</Button>
				</div>
				<div
				
				>
					{room.round === null && <h1>{room.questions[0].question}</h1>}
					{room.round !== null && room.round < 5 && <h2 style={{
						
						fontFamily: "'Anton', sans-serif",
						fontSize: "35px",
						textAlign: 'center',
						marginTop: "35px"
						
					}}>{room.questions[room.round].question}</h2>}
				</div>	
				
				<div style={{marginLeft: "260px", textAlign: "center", marginTop: "20px", padding: "20px", float: "left",  width: "auto"}}>																																																																																																																																																																																																																																																																																																																																																																																																																																																																																	
					<Button
						style={{
							fontFamily: "'Anton', sans-serif",
							height: '35px',
							padding: "1.5px",
							width: '200px',
							margin: 'auto',
						}}
						type="Submit"
						className="btn-lg btn-dark btn-block"
						onClick={() => this.sendChoice(true)}
					>
						I HAVE
					</Button>
				</div>
				<div style={{marginTop: "20px", padding: "20px", float: "left",  width: "auto"}}>
					<Button
						style={{
							fontFamily: "'Anton', sans-serif",
							height: '35px',
							padding: "1.5px",
							width: '200px',
							margin: 'auto',
						}}
						type="Submit"
						className="btn-lg btn-dark btn-block"
						onClick={() => this.sendChoice(false)}
					>
						I HAVE NOT
					</Button>
				</div>
				<div style={{marginTop: "20px", padding: "20px", float: "left",  width: "auto"}}>
					{!drink && userList}
					<Button
						style={{
							fontFamily: "'Anton', sans-serif",
							height: '35px',
							padding: "1.5px",
							width: '200px',
							margin: 'auto',
							
						
						}}
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