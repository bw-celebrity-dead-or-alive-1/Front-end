import React, { useState } from "react";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";
import ValidateFields from "./Validate";


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
	};

	if (isReg) {
		userInfo.email = emailInput.value;
	}

	const doSubmit = (e) => {
		e.preventDefault();
		const make = []
		Object.keys(userInfo).forEach(el => {
			if (userInfo[el] === "") {
				make.push(`"${el}" field cannot be blank.`)
			}
		})
		if (make.length !== 0) {
			setValidate(make)
			return
		} else {
			clg("login submitted", userInfo);
			/* 
			form submission here
			 */
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
