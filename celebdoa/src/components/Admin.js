import React, { useState } from 'react';

import {
	ButtonGroup,
	ToggleButton,
	InputGroup,
	FormControl
} from 'react-bootstrap';


function clg(...x) { console.log(...x) }  // because i'm sick of mistyping console.log

const Login = (props) => {
	const [doaFields, setDoaFields] = useState({ celebName: "", factoid1: "", factoidA: "", dob: "", imageurl: "", doa: "" });

	// form field 
	const doFields = e => {
		e.preventDefault();
		setDoaFields({ ...doaFields, [e.target.name]: e.target.value });
		clg(doaFields);
	}

	const handleSubmit = e => {
		e.preventDefault();

		/* from Darrin for Darrin
		validate the length of the fields
		if field.length < 4, display an error. */

		clg("admin page submitted")
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='celebName' value={doaFields.celebName} placeholder="Name of celebrity (required)" onChange={doFields}></input>
				<input type='text' name='factoid' value={doaFields.factoid} placeholder="Short factoid (required)" onChange={doFields}></input>
				<input type='text' name='dob' value={doaFields.dob} placeholder="Date of birth" onChange={doFields}></input>
				<input type='text' name='imageurl' value={doaFields.imageurl} placeholder="URL to image (required)" onChange={doFields}></input>
				<input type='text' name='doa' value={doaFields.doa} placeholder="URL to image (required)" onChange={doFields}></input>
				<button>Login</button>
			</form>
		</div>
	);
}

export default Login;