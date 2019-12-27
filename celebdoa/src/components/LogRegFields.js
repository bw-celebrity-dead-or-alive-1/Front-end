import React from "react";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";

function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const LogRegFields = (props) => {
	const isReg = props.register;
    let title = "Login";

    if (isReg) {
       title = "Register" ;
    }

	const emailInput = useInputControl("");
	const usernameInput = useInputControl("");
	const passwdInput = useInputControl("");

	const userInfo = {
		username: usernameInput.value,
		password: passwdInput.value,
		email: emailInput.value
	};

	if (isReg) {
		userInfo.email = emailInput.value;
	}

	const doSubmit = (e) => {
		e.preventDefault();
		clg("login submitted", userInfo);
	};

	return (
		<form onSubmit={doSubmit}>
			<Card.Header>
				<Card.Title bg="light">{title}</Card.Title>
			</Card.Header>
			<Card.Body style={{ padding: "2rem" }}>
				<EmailField emailInput={emailInput} isReg={isReg} />
				<InputGroup className="mb-3">
					<FormControl {...usernameInput} placeholder="Username" />
				</InputGroup>
				<InputGroup className="mb-3">
					<FormControl {...passwdInput} type="password" placeholder="Password" />
				</InputGroup>
				<Button variant="primary" type="submit" style={{ width: "10rem" }}>
					Join!
				</Button>
			</Card.Body>
		</form>
	);
};

function EmailField(props) {
	clg(props.emailInput)
	if (props.isReg) {
		return (
			<InputGroup className="mb-3">
				<FormControl {...props.emailInput} placeholder="Email" />
			</InputGroup>
		);
    }
    return (<></>)
}

export default LogRegFields;
