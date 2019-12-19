import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

import { Navbar as NavbarBS, Nav, } from 'react-bootstrap';

const Navbar = () => {
	return (
		<Router>
			<NavbarBS bg="dark">
			<NavbarBS.Brand href="#home">React-Bootstrap</NavbarBS.Brand>
				<Nav.Link><Link to="/register">Register</Link></Nav.Link>
				<Nav.Link><Link to="/login">Login</Link></Nav.Link>
			</NavbarBS>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	);
};

export default Navbar;