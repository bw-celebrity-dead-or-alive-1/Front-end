import React, { useState } from 'react';
import {
	Button,
	Card,
	InputGroup,
	FormControl
} from 'react-bootstrap';

function clg(...x) { console.log(...x) }  // because i'm sick of mistyping console.log

const Login = (props) => {
	const [registerFields, setRegisterFields] = useState({ username: "", password: "", email: "" });

	// form field 
	const doFields = e => {
		e.preventDefault();
		setRegisterFields({ ...registerFields, [e.target.name]: e.target.value });
		clg(registerFields);
	}

	const handleSubmit = e => {
		e.preventDefault();
		clg("register submitted")
	}

	return (
		<Card style={{ width: "35rem" }}>
			<form onSubmit={handleSubmit}>
				<Card.Header><Card.Title bg="light">Register</Card.Title></Card.Header>
				<Card.Body style={{ padding: "2rem" }}>
					<InputGroup className="mb-3">
						<FormControl
							name='username' value={registerFields.email} onChange={doFields}
							placeholder="Email"
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							name='username' value={registerFields.username} onChange={doFields}
							placeholder="Username"
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							name='password' type="password" value={registerFields.password} onChange={doFields}
							placeholder="Password"
						/>
					</InputGroup>
					<Button variant="primary" type="submit" style={{ width: "10rem" }}>Join!</Button>
				</Card.Body>
			</form>
		</Card>
	);
}

export default Login;