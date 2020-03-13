import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
	return (
		<div className="login-page">
		<Form className="login-form" onSubmit={props.onSubmit}>
			<h1 className="text-center">
				Login
			</h1>
			<Form.Group controlId="formBasicEmail">
				<Form.Label style={{ fontFamily: "'Anton', sans-serif " }}>Email address</Form.Label>
				<Form.Control
					size="sm"
					type="text"
					name="userName"
					value={props.values.email}
					onChange={props.onChange}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>
					Password
				</Form.Label>
				<Form.Control
					size="sm"
					type="text"
					name="password"
					value={props.values.password}
					onChange={props.onChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check style={{ fontFamily: "'Anton', sans-serif" }} type="checkbox" label="Check me out" />
			</Form.Group>
			<Button 
				type="Submit"
				className="btn-lg btn-dark btn-block"
			>
				Log in
			</Button>

			<Form.Text style={{ marginTop: '12px' }} className="text-center">
				<Link style={{ fontFamily: "'Anton', sans-serif", fontSize: '18px', color: 'black' }} to="/sign-up">
					Create your account
				</Link>{' '}
				<br />
				<Link style={{ fontFamily: "'Anton', sans-serif", fontSize: '18px', color: 'black' }} to="/">
					Forgot password
				</Link>
			</Form.Text>
		</Form>
		</div>
	);
}
