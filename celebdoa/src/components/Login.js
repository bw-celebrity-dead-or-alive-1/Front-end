import React, { useState } from 'react';
import {
	Button,
	Card,
	InputGroup,
	FormControl
} from 'react-bootstrap';

function clg(...x) { console.log(...x) }  // because i'm sick of mistyping console.log

const Login = (props) => {
	const [loginFields, setLoginFields] = useState({ username: "", password: "" });

	// form field 
	const doFields = e => {
		e.preventDefault();
		setLoginFields({ ...loginFields, [e.target.name]: e.target.value });
		clg(loginFields);
	}

	const handleSubmit = e => {
		e.preventDefault();
		clg("login submitted")
	}

	return (
		<Card style={{ width: "35rem" }}>
			<form onSubmit={handleSubmit}>
				<Card.Header><Card.Title bg="light">Login</Card.Title></Card.Header>
				<Card.Body style={{ padding: "2rem" }}>
					<InputGroup className="mb-3">
						<FormControl
							name='username' value={loginFields.username} onChange={doFields}
							placeholder="Username"
						/>
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl
							name='password' type="password" value={loginFields.password} onChange={doFields}
							placeholder="Password"
						/>
					</InputGroup>
					<Button variant="primary" type="submit" style={{ width: "10rem" }}>Login</Button>
				</Card.Body>
			</form>
		</Card>
	);
}

export default Login;