import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { createUser } from '../actions/user';

class SignupFormContainer extends Component {
	state = { userName: '', password: '' };

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.createUser({
			userName: this.state.userName,
			password: this.state.password,
			history: this.props.history.push("/login") 
		});
	};

	render() {
		return (
			<div>
				<SignUpForm 
				onChange={this.onChange} onSubmit={this.onSubmit} values={this.state} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps, { createUser })(SignupFormContainer);
