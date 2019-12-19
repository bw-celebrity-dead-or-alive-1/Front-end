import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

import { Navbar as NB, Nav, } from 'react-bootstrap';

const Navbar = () => {
	return (
		<Router>
			<NB bg="dark">
				<ul>
					<li><Link to="/register">Register</Link></li>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</NB>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>

			// {/* <ul>
			// 		<li><a href="#">Register</a></li>
			// 		<li><a href="#">Login</a></li>
			// 		<li><a href="#">Play DOA!</a></li>
			// 	</ul> */}
	);
};

export default Navbar;