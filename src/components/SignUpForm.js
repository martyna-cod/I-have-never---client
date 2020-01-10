import React from "react";
import { Form, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

export default function SignUpForm(props) {
  return (
<Form className="login-form" onSubmit={props.onSubmit}>
			<h1 style={{ fontFamily: "'Anton', sans-serif " }} className="text-center">Welcome</h1>
			<Form.Group controlId="formBasicEmail">
				<Form.Label style={{fontFamily: "'Anton', sans-serif" }}>Email address</Form.Label>
				<Form.Control
					size="sm"
					type="text"
					name="userName"
					value={props.values.email}
					onChange={props.onChange}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label style={{fontFamily: "'Anton', sans-serif" }}>Password</Form.Label>
				<Form.Control
					size="sm"
					type="text"
					name="password"
					value={props.values.password}
					onChange={props.onChange}
				/>
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check style={{fontFamily: "'Anton', sans-serif"}} type="checkbox" label="Check me out" />
			</Form.Group>
			<Button style={{fontFamily: "'Anton', sans-serif", height: "35px", padding: "2.5px" }} type="Submit" className="btn-lg btn-dark btn-block">Sign up</Button>
			<Form.Text className="text-center">
			</Form.Text>
		</Form>

  )
}