import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class HomePage extends Component {
	render() {
		return (
			<div className="home-page">
				<div className="home-page-p">Ever I have never</div>
				<div className="home-page-btn">
					<LinkContainer to="/login">
						<Button type="Submit" className="btn-dark">
							Ready to play?
						</Button>
					</LinkContainer>
				</div>
			</div>
		);
	}
}

export default HomePage;
