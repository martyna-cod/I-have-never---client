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
			<div className="rooms-list-page">
				<div className="main-title-rooms-list">Choose an existing room or create new one</div>


				<div className="row">
				<div class="col-1-of-2">
					<h1 className="sub-title-rooms-list">Active rooms </h1>
					<h3 className="rooms-list">{list}</h3>
				</div>

				<div class="col-1-of-2">
					<Link className="link" to="/question">
						Create new room and play with your friends!
					</Link>
				</div>
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
