import React, { useState } from 'react';
import { Button, Card, InputGroup, FormControl, ToggleButton, ToggleButtonGroup, ButtonGroup } from "react-bootstrap";

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
		alive: alive
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
		// const chgAlive = e.target.value;
		// clg(47, alive, chgAlive);
		// // setAlive({chgAlive});
	};

	return (
		<Card style={{ width: '40rem' }}>
			<form onSubmit={doSubmit}>
				<Card.Header>
					<Card.Title bg="light">Add Celeb</Card.Title>
				</Card.Header>
				<Card.Body style={{ padding: "2rem" }}>
					<InputGroup className="mb-3">
						<FormControl style={{ minWidth: "50%" }} {...celebNameInput} placeholder="Celebrity" />
						<FormControl {...dobInput} placeholder="Birth Year" style={{ maxWidth: "25%" }} />
						<ToggleButtonGroup name="alivequestion">
							<ToggleButton type="radio" name="alive" value={true} checked={alive === true} onClick={() => setAlive(true)} onChange={doAlive} defaultChecked >
								Alive
							</ToggleButton>
							<ToggleButton type="radio" name="dead" value={false} checked={alive === false} onClick={() => setAlive(false)} onChange={doAlive}>
								Dead
							</ToggleButton>
						</ToggleButtonGroup>
						{/* <input value={false} checked={alive === false} onClick={() => setAlive(false)} type="radio" onChange={doAlive} />
						<input value={true} checked={alive === true} onClick={() => setAlive(true)} type="radio" onChange={doAlive} />
						<input value={false} checked={alive === false} onClick={() => setAlive(false)} type="radio" onChange={doAlive} /> */}
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