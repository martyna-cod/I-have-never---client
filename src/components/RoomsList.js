import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Rooms extends Component {
	render() {
		const { rooms } = this.props;
		if (!rooms) {
			return null;
		}

		const list = rooms.map((room) => (
			<p key={room.name}>
				<Link
					to={`/room/${room.roomName}`}
					key={room.roomName}
					style={{ color: 'black', fontSize: '30px', fontStyle: 'bold' }}
				>
					{room.roomName}
				</Link>
			</p>
		));
		return (
			<main>
				<div>
					
					<h1 style={{ marginTop: '50px', fontSize: '40px', fontFamily: "'Anton', sans-serif " , textAlign: 'center' }}>
						Rooms{' '}
					</h1>
					{list}
				</div>
				
			</main>
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
