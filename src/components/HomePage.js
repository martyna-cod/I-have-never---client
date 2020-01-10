import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class HomePage extends Component {
	render() {
		return (
			<div>
				<h1 className="main-title">Never have I ever</h1>

				<h3 className="main-page-p">
					Rules. The online game is started with the players getting into the room game. Then, the player that
					created a room, create 5 simple statements about what they have never done before. Anyone who at
					some point in their life has done the action that the first player says, must drink. Get drunk
					tonight!
				</h3>

				<LinkContainer style={{marginLeft: "550px"}} to="/login">
					<Button
					 type="Submit" className="btn-dark"
						
					 
					>
						Ready to play?
					</Button>
				</LinkContainer>
			</div>
		);
	}
}

export default HomePage;
