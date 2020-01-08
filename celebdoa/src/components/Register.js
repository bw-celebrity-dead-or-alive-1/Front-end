import React, { useState } from 'react';

function clg(...x) { console.log(...x) }  // because i'm sick of mistyping console.log

const Login = (props) => {
	const [loginFields, setLoginFields] = useState({ username: "", password: "", email: "" });

	// form field 
	const doFields = e => {
		e.preventDefault();
		setLoginFields({ ...loginFields, [e.target.name]: e.target.value });
		clg(loginFields);
	}

	const handleSubmit = e => {
		e.preventDefault();
		clg("login submitted")
	}

	return (
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='username' value={loginFields.username} onChange={doFields}></input>
				<input type='text' name='email' value={loginFields.email} onChange={doFields}></input>
				<input type='password' name='password' value={loginFields.password} onChange={doFields}></input>
				<button>Login</button>
			</form>
		</>
	);
}

export default Login;