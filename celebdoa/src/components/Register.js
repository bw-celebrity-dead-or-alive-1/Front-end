import React, { useState } from 'react';

function clg(...x) { console.log(...x) }  // because i'm sick of mistyping console.log

const Login = (props) => {
	const [registerFields, setRegisterFields] = useState({ username: "", password: "", email: "" });

	// form field 
	const doFields = e => {
		e.preventDefault();
		setRegisterFields({ ...registerFields, [e.target.name]: e.target.value });
		clg(registerFields);
	}

	const handleSubmit = e => {
		e.preventDefault();
		clg("register submitted")
	}

	return (
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='username' value={registerFields.username} onChange={doFields}></input>
				<input type='text' name='email' value={registerFields.email} onChange={doFields}></input>
				<input type='password' name='password' value={registerFields.password} onChange={doFields}></input>
				<button>Join!</button>
			</form>
		</>
	);
}

export default Login;