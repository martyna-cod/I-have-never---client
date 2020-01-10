import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Rooms extends Component {
	render() {
		const { rooms } = this.props;
		if (!rooms) {
			return null;
		}

		const list = rooms.map((room) => (
			<div style={{color: "black", padding: "5px", textAlign: "center", fontFamily: "'Anton', sans-serif"}}>
				<p key={room.name}>
					<Link style={{color: "white", decoration: "none"}}
						to={`/room/${room.roomName}`}
						key={room.roomName}
					>
						{room.roomName}
					</Link>
				</p>
			</div>	
		));
		return (
	
				<div>
					<div>
					<h1
						style={{
							marginTop: '50px',
							fontSize: '40px',
							fontFamily: "'Anton', sans-serif ",
							textAlign: 'center',
							padding: "5px"
						}}
					>
						Rooms{' '}
					</h1>
					</div>
					<div style={{ textAlign: 'center', padding: "10px" }}>
						<Link
							style={{
								textAlign: 'center',
								color: 'white',
								fontFamily: "'Anton', sans-serif ",
								fontSize: '25px'
							}}
							to="/question"
						>
							Create new room and play with your friends!
						</Link>
						</div>


						<div style={{padding: "5px"}}>
						<h3 style={{ fontSize: "20px"}}>{list}</h3>
						</div>
								
					</div>
				
			
		);
	}
}

function mapStateToProps(state) {
	return {
		rooms: state.rooms,
		user: state.user
	};
}

export default connect(mapStateToProps)(Rooms);
