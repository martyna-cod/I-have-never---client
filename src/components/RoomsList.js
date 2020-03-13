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
			<div>
				<p key={room.name}>
					<Link to={`/room/${room.roomName}`} key={room.roomName}>
						{room.roomName}
					</Link>
				</p>
			</div>
		));
		return (
			<div className="list-rooms-page">
				<div className="rooms-list-header">
					<h1>Rooms </h1>
				</div>
				<div className="rooms-list-link" >
					<Link className="link" to="/question">Create new room and play with your friends!</Link>
				</div>

				<div className="rooms-list">
					<h3>{list}</h3>
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
