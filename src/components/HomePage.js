import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	MDBNavItem,
	MDBMask,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBView,
	MDBContainer,
	MDBAnimation,
} from 'mdbreact';
import '../index.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from "react-bootstrap"
class Home extends React.Component {
	state = {
		collapsed: false
	};

	handleTogglerClick = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const overlay = (
			<div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleTogglerClick} />
		);
		return (
			<div id="apppage">
				<Router>
					<div>
					{this.state.collapsed && overlay}
					</div>
				</Router>
				<MDBView>
					<MDBMask>
						<MDBContainer>
							<MDBRow>
								<MDBCol>
									<MDBAnimation type="fadeInLeft" delay=".4s">
										<h1 className="main-page">
											Never have I ever
										</h1>
										<hr className="hr-light" />
										<h6 className="main-page-p">
										Rules. The online game is started with the players getting into the room game. Then, the player that created a room, create 5 simple statements about what they have never done before. Anyone who at some point in their life has done the action that the first player says, must drink. <br/> <br/> Get drunk tonight!
										</h6> 
										<MDBBtn style={{color: "white", fontSize: "20px"}}color="white">
                                        <LinkContainer className="Link" to="/login">
											<MDBNavItem active>
												<Button style={{fontFamily: "'Anton', sans-serif", marginLeft: "150px", fontSize: "15px", width: "300px", height: "35px", padding: "2px"}} className="btn-lg btn-light btn-block" >
                                            Ready to play?
											</Button>
											</MDBNavItem>
										</LinkContainer></MDBBtn> 
									</MDBAnimation>
								</MDBCol>

								<MDBCol md="6" xl="5" className="mt-xl-5">
									<MDBAnimation type="fadeInRight" delay=".3s" />
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</MDBMask>
				</MDBView>
			</div>
		);
	}
}

export default Home;