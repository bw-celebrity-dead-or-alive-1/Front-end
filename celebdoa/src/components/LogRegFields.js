import React, { useState } from "react";
import { Button, Card, InputGroup, FormControl, Alert } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";

function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const LogRegFields = (props) => {
	const [validate, setValidate] = useState([]);

	const isReg = props.register;
	let title = "Login";

	if (isReg) {
		title = "Register";
	}

	const emailInput = useInputControl("");
	const usernameInput = useInputControl("");
	const passwdInput = useInputControl("");

	const userInfo = {
		username: usernameInput.value,
		password: passwdInput.value,
		// email: emailInput.value
	};

	if (isReg) {
		userInfo.email = emailInput.value;
	}

	const doSubmit = (e) => {
		e.preventDefault();
		const make = []
		Object.keys(userInfo).forEach(e => {
			if (userInfo[e] === "") {
				// clg(36, userInfo[e])
				make.push(`"${e}" field cannot be empty.`)
			}
		})
		setValidate(make)
		clg(42,validate)
		if (validate.length !== 0) {
			return
		} else {
			
			clg("login submitted", userInfo);
			
		}
	};

	return (
		<div>
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
				</Card.Body>
				<Button variant="primary" type="submit" style={{ width: "10rem", margin: "0 0 1.75rem" }}>
					Join!
			</Button>
			</form>
			<ValidateFields validate={validate} />
		</div>
	);
};

function ValidateFields(props) {
	let display = "none"
	if (props.validate.length !=0) {display = "block"}
	return (
		<Alert variant="danger" style={{ display: display }}>
			{props.validate.map(v => {
				// clg(80,v)
				return `${v} `
			})}
		</Alert>
	)
}

function EmailField(props) {
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
