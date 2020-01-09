import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Button, Card, InputGroup, FormControl, Form } from "react-bootstrap";

import ValidateFields from "./Validate";


function clg(...x) { console.log(...x); } // because i"m sick of mistyping console.log

const CelebEdit = (props) => {
	const incomingId = props.match.params.id;

	// setting up local state
	const [doaFields, setDoaFields] = useState({ celebname: "", image_url: "", factoid: "", birthyear: "", alive: false });
	const [validate, setValidate] = useState([]);
	const [buttontxt, setButtontxt] = useState({ button: "Edit Celeb", variant: "primary", del: false });

	// form field 
	const doFields = e => {
		e.preventDefault();
		setDoaFields({ ...doaFields, [e.target.name]: e.target.value });
		clg(25, doaFields);
		clg(25, doaFields.alive);
	}

	const doAlive = e => {
		const chgAlive = e.target.checked;
		setDoaFields(doaFields => {
			return { ...doaFields, alive: chgAlive }
		})
	};

	const doSubmit = e => {
		e.preventDefault();
		if (buttontxt.del) {
			axios
				.delete(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/del/${incomingId}`)
				.then(response => {
					setButtontxt({ variant: "dark", button: "Deleted!" })
					setTimeout(() => {
						props.history.push("/admin")
					}, 1500);
				})
				.catch(err => console.error(`>>> PROBLEM -- delete > axios :: ${err}`))
		} else {
			const make = []
			Object.keys(doaFields).forEach(el => {
				if (doaFields[el] === "") {
					make.push(`"${el}" field cannot be blank.`)
				}
			})
			if (make.length !== 0) {
				setValidate(make)
				return
			} else {
				setValidate(make)
				clg("admin page submitted", doaFields)

				// this axios is busted.
				axios
					.put(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb`, doaFields)
					.then(response => {
						clg(47, response.data);
						setButtontxt({ button: "Done!", variant: "success", del: "" })
						setTimeout(() => {
							props.history.push("/admin")
						}, 1500);
					})
					.catch(error => console.log("AdminEdit 60 PUT error: ", error));
				e.preventDefault();
			}
		}
	}

	useEffect(() => {
		clg(61, "get one")
		const one = () => {
			axios
				.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/${incomingId}`)
				.then(response => {
					const chkAlive = response.data.alive;
					chkAlive
						? response.data.alive = true
						: response.data.alive = false;
					clg(75, typeof (response.data.alive), response.data.alive)
					setDoaFields(response.data);
				})
				.catch(err => console.error(`>>> PROBLEM -- List > axios :: ${err}`))
		}
		one();
	}, [incomingId])

	return (
		<Container>
			<Card bg="info" style={{ maxWidth: '40rem', margin: "auto" }}>
				<form onSubmit={doSubmit}>
					<Card.Header>
						<Card.Title>Edit Celeb</Card.Title>
					</Card.Header>
					<Card.Body style={{ padding: "2rem" }}>
						<InputGroup className="mb-3">
							<Form.Check inline label="Alive"
								type="checkbox"
								name="alive"
								checked={doaFields.alive}
								// value="true"
								// checked={true}
								onChange={doAlive}
								variant="outline-primary"
							/>
							<FormControl name="celebname" value={doaFields.celebname} onChange={doFields} style={{ minWidth: "50%" }} />
						</InputGroup>

						<InputGroup className="mb-3">
							<FormControl name="birthyear" value={doaFields.birthyear} onChange={doFields} placeholder="Birth Year" style={{ maxWidth: "25%" }} />
							<FormControl name="image_url" value={doaFields.image_url} onChange={doFields} placeholder="Image URL" />
						</InputGroup>

						<InputGroup className="mb-3">
							<FormControl name="factoid" value={doaFields.factoid} onChange={doFields} placeholder="Factoid" />
						</InputGroup>

						<Button variant={buttontxt.variant} type="submit" style={{ width: "10rem", margin: "0 30px 0 0" }}>
							{buttontxt.button}
						</Button>
						<Form.Check inline label="Delete?"
							type="checkbox"
							name="delete"
							checked={buttontxt.del}
							// value="true"
							// checked={true}
							onClick={() => { setButtontxt({ button: "Edit Celeb", variant: "primary", del: !buttontxt.del }) }}
							variant="outline-primary"
						/>
					</Card.Body>
				</form>
				<ValidateFields validate={validate} />
			</Card>
		</Container>
	);
}

export default CelebEdit;