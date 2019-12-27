import React, { useState } from 'react';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";

function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const Login = (props) => {
	const [alive, setAlive] = useState(true)

	// #region upper component 
	const celebNameInput = useInputControl("");
	const factoidInput = useInputControl("");
	const imageUrlInput = useInputControl("");
	const dobInput = useInputControl("");


	// const chkAliveField = () => {
	// 	if (aliveInput.value.length > 1) {
	// 		aliveInput.value = aliveInput.value.charAt(aliveInput.value.length - 1);
	// 		clg(18, aliveInput)
	// 	}
	// 	return aliveInput.value
	// }

	const celebInfo = {
		celebName: celebNameInput.value,
		factoid: factoidInput.value,
		dob: dobInput.value,
		imageUrl: imageUrlInput.value,
		// alive: aliveInput.value
	};

	const doSubmit = e => {
		e.preventDefault();

		/* from Darrin for Darrin
		validate the length of the fields
		if field.length < 4, display an error. */

		clg("admin page submitted", celebInfo)
	}
	// #endregion

	const doAlive = e => {
		const chgAlive = e.target.value;
		clg(47, alive, chgAlive);
		setAlive({!alive});
	};

	return (
		<Card style={{ width: '40rem' }}>
			<form onSubmit={doSubmit}>
				<Card.Header>
					<Card.Title bg="light">Add Celeb</Card.Title>
				</Card.Header>
				<Card.Body style={{ padding: "2rem" }}>
					<InputGroup className="mb-3">
						<FormControl style={{ minWidth: "45%" }} {...celebNameInput} placeholder="Celebrity" />
						<FormControl {...dobInput} placeholder="Birth Year" />
						<input value={true} checked={alive === true} onChange={doAlive} type="radio" />
						<input value={false} checked={alive === false} onChange={doAlive} type="radio" />
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl {...imageUrlInput} placeholder="Image URL" />
					</InputGroup>
					<InputGroup className="mb-3">
						<FormControl {...factoidInput} placeholder="Factoid" />
					</InputGroup>
					<Button variant="primary" type="submit" style={{ width: "10rem" }}>
						Add Celeb
				</Button>
				</Card.Body>
			</form>
		</Card>
	);
}

export default Login;