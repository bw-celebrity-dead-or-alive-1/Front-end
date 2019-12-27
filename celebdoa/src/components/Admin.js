import React, { useState } from 'react';
import { Button, Card, InputGroup, FormControl, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";

function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const CelebAdmin = (props) => {
	const [alive, setAlive] = useState(true)

	const celebNameInput = useInputControl("");
	const factoidInput = useInputControl("");
	const imageUrlInput = useInputControl("");
	const dobInput = useInputControl("");

	const celebInfo = {
		celebName: celebNameInput.value,
		factoid: factoidInput.value,
		dob: dobInput.value,
		imageUrl: imageUrlInput.value,
		alive: alive
	};

	const doSubmit = e => {
		e.preventDefault();

		clg("admin page submitted", celebInfo)
	}

	const doAlive = e => {
		const chgAlive = e.target.value;
		clg(47, chgAlive);
		setAlive(chgAlive);
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
						<ToggleButtonGroup name="alivequestion" defaultValue={true}>
							<ToggleButton type="radio" name="alive" value={true} checked={alive === true} onChange={doAlive} variant="outline-primary" >
								Alive
							</ToggleButton>
							<ToggleButton type="radio" name="dead" value={false} checked={alive === false} onChange={doAlive} variant="outline-primary">
								Dead
							</ToggleButton>
						</ToggleButtonGroup>
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

export default CelebAdmin;