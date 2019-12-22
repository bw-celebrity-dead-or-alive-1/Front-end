import React, { useState } from 'react';
import { Button, Card, InputGroup, FormControl } from 'react-bootstrap';

import { useInputControl } from './hooks/useInputControl.js';

function clg(...x) {
	console.log(...x);
} // because i'm sick of mistyping console.log

const LogReg = (props) => {
	// clg(props);
	const isReg = props.register;

	const emailInput = useInputControl('');
	const usernameInput = useInputControl('');
	const passwdInput = useInputControl('');

	const userInfo = {
		username: usernameInput.value,
		password: passwdInput.value,
		email: passwdInput.value
	};

	if (isReg) {
		userInfo.email = passwdInput.value;
	}

	const doSubmit = (e) => {
		e.preventDefault();
		clg('login submitted', userInfo);
	};

	return (
		<form onSubmit={doSubmit}>
			<Card.Header>
				<Card.Title bg="light">Register</Card.Title>
			</Card.Header>
			<Card.Body style={{ padding: '2rem' }}>
				<InputGroup className="mb-3">
					<FormControl {...emailInput} placeholder="Email" />
				</InputGroup>
				<InputGroup className="mb-3">
					<FormControl {...usernameInput} placeholder="Username" />
				</InputGroup>
				<InputGroup className="mb-3">
					<FormControl {...passwdInput} type="password" placeholder="Password" />
				</InputGroup>
				<Button variant="primary" type="submit" style={{ width: '10rem' }}>
					Join!
				</Button>
			</Card.Body>
		</form>
	);
};

export default LogReg;
