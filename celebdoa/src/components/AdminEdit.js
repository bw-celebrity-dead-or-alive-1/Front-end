import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Button, Card, InputGroup, FormControl, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

import ValidateFields from "./Validate";

import { useInputControl } from "./hooks/useInputControl.js";



function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const CelebEdit = (props) => {
	const incomingId = props.match.params.id;

	// setting up local state
	const [doaFields, setDoaFields] = useState({ celebname: "", image_url: "", factoid: "", birthyear: "", alive: "false" });
	const [validate, setValidate] = useState([]);

	const celebInfo = {}
	// form field 
	const doFields = async e => {
		e.preventDefault();
		await setDoaFields({ ...doaFields, [e.target.name]: e.target.value });
		clg(25,doaFields);
		clg(25,doaFields.alive);
	}

	const doSubmit = e => {
		e.preventDefault();
		const make = []
		Object.keys(celebInfo).forEach(el => {
			if (celebInfo[el] === "") {
				make.push(`"${el}" field cannot be blank.`)
			}
		})
		if (make.length !== 0) {
			setValidate(make)
			return
		} else {
			setValidate(make)
			clg("admin page submitted", celebInfo)

			// this axios is busted.
			axios
				.post(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb`, celebInfo)
				.then(response => {
					clg(47,response.data);
				})
				.catch(error => console.log("POST: ",error));
			e.preventDefault();
		}
	}

	useEffect(() => {
		clg(61,"get one")
		const one = () => {
			axios
				.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/${incomingId}`)
				.then(response => {
					const chkAlive = response.data.alive;
					chkAlive
					? response.data.alive = "true"
					: response.data.alive = "false";
					clg(66, response.data.alive)
					setDoaFields(response.data);
					
				})
				.catch(err => console.error(`>>> PROBLEM -- List > axios :: ${err}`))
		}
		one();
	}, [])

	return (
		<Container>
			<Card bg="info" style={{ maxWidth: '40rem', margin: "auto" }}>
				<form onSubmit={doSubmit}>
					<Card.Header>
						<Card.Title>Edit Celeb</Card.Title>
					</Card.Header>
					<Card.Body style={{ padding: "2rem" }}>
						<InputGroup className="mb-3">
							<FormControl name="celebname" value={doaFields.celebname} onChange={doFields} style={{ minWidth: "50%" }} />

							<ToggleButtonGroup name="alive" >
								<ToggleButton type="radio" value={false} checked={doaFields.alive} onChange={doFields} variant="outline-primary" >
									Alive
								</ToggleButton>
								<ToggleButton type="radio" value={true} checked={doaFields.alive} onChange={doFields} variant="outline-primary">
									Dead
								</ToggleButton>
							</ToggleButtonGroup>
						</InputGroup>

						<InputGroup className="mb-3">
							<FormControl name="birthyear" value={doaFields.birthyear} onChange={doFields} placeholder="Birth Year" style={{ maxWidth: "25%" }} />
							<FormControl name="image_url" value={doaFields.image_url} onChange={doFields} placeholder="Image URL" />
						</InputGroup>
						
						<InputGroup className="mb-3">
							<FormControl name="factoid" value={doaFields.factoid} onChange={doFields} placeholder="Factoid" />
						</InputGroup>
						
						<Button variant="primary" type="submit" style={{ width: "10rem" }}>
							Edit Celeb
						</Button>
					</Card.Body>
				</form>
				<ValidateFields validate={validate} />
			</Card>
		</Container>
	);
}

export default CelebEdit;