import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default class Questions extends Component {
	render() {
		const { questionsValues, onChangeQuestion } = this.props;
		return (
			<div className="questions-page">
			<Form className="questions-form" onSubmit={this.props.onSubmit}>
				 <Form.Label >Enter your questions</Form.Label>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control 
							size="sm"
							type="text"
							name="Quesions"
							placeholder="1."
							value={questionsValues['q1']}
							onChange={(event) => onChangeQuestion(event, 'q1')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control 
							size="sm"
							type="text"
							name="Quesions"
							placeholder="2."
							value={questionsValues['q2']}
							onChange={(event) => onChangeQuestion(event, 'q2')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col>
						<Form.Control 
							size="sm"
							type="text"
							name="Questions"
							placeholder="3."
							value={questionsValues['q3']}
							onChange={(event) => onChangeQuestion(event, 'q3')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control 
							size="sm"
							type="text"
							name="Quesions"
							placeholder="4."
							value={questionsValues['q4']}
							onChange={(event) => onChangeQuestion(event, 'q4')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control
							size="sm"
							type="text"
							name="Quesions"
							placeholder="5."
							value={questionsValues['q5']}
							onChange={(event) => onChangeQuestion(event, 'q5')}
						/>
					</Col>
				</Form.Group>
			</Form>
			</div>
		);
	}
}
