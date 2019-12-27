import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button, Card, InputGroup, FormControl, ToggleButton, ToggleButtonGroup, ButtonGroup } from "react-bootstrap";

import { useInputControl } from "./hooks/useInputControl.js";

function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const CelebAdmin = (props) => {
	// useInputControl setup, abstracting the basic form fields
	const celebNameInput = useInputControl("");
	const factoidInput = useInputControl("");
	const imageUrlInput = useInputControl("");
	const birthyear = useInputControl("");

	// setting up local state
	const [alive, setAlive] = useState(true);
	const [celebs, setCelebs] = useState([]);

	useEffect(() => {
		const getList = () => {
			axios
				.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb`)
				.then(response => {
					clg(25, response.data)
					setCelebs(response.data)
				})
				.catch(err => console.error(`>>> PROBLEM -- List > axios :: ${err}`))
		}
		getList();
	}, [])

	const celebInfo = {
		celebname: celebNameInput.value,
		imageUrl: imageUrlInput.value,
		factoid: factoidInput.value,
		birthyear: birthyear.value,
		alive: alive
	};

	const doAlive = e => {
		const chgAlive = e.target.value;
		clg(47, chgAlive);
		setAlive(chgAlive);
	};

	const doSubmit = e => {
		axios
			.post(`https://herokuurl`, celebInfo)
			.then(response => {

			})
			.catch(error => console.log(error));

		e.preventDefault();
		clg("admin page submitted", celebInfo)
	}

	return (
		<div>
			<Card style={{ width: '40rem' }}>
				<form onSubmit={doSubmit}>
					<Card.Header>
						<Card.Title bg="light">Add Celeb</Card.Title>
					</Card.Header>
					<Card.Body style={{ padding: "2rem" }}>
						<InputGroup className="mb-3">
							<FormControl style={{ minWidth: "50%" }} {...celebNameInput} placeholder="Celebrity" />
							<FormControl {...birthyear} placeholder="Birth Year" style={{ maxWidth: "25%" }} />
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
			<Card>
				{celebs.map(single => (
					<div key={single.id}>{single.celebname}</div>
				))}
			</Card>
		</div>
	);
}

export default CelebAdmin;