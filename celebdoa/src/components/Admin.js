import React  from 'react';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";

function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const Login = (props) => {
	// #region upper component 
	const celebNameInput = useInputControl("");
	const factoidInput = useInputControl("");
	const imageUrlInput = useInputControl("");
	const aliveInput = useInputControl("");
	const dobInput = useInputControl("");


	const chkAliveField = () => {
		if (aliveInput.value.length > 1) {
			aliveInput.value = aliveInput.value.charAt(aliveInput.value.length - 1);
			clg(18, aliveInput)
		}
		return aliveInput.value
	}

	const celebInfo = {
		celebName: celebNameInput.value,
		factoid: factoidInput.value,
		dob: dobInput.value,
		imageUrl: imageUrlInput.value,
		alive: aliveInput.value
	};

	const doSubmit = e => {
		e.preventDefault();

		/* from Darrin for Darrin
		validate the length of the fields
		if field.length < 4, display an error. */

		clg("admin page submitted", celebInfo)
	}
	// #endregion

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
						<FormControl
							onChange={aliveInput.onChange}
							value={chkAliveField()}
							placeholder="Alive? Put Y or N."
						/>
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