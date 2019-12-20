import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
// import Admin from "./Admin";

import { Navbar as NavbarBS, Nav, } from 'react-bootstrap';

const Navbar = () => {
	return (
		<Router>
			<NavbarBS bg="light">
			<NavbarBS.Brand href="/">Celeb DOA</NavbarBS.Brand>
				<Nav.Item><Link to="/register">Register</Link></Nav.Item>
				<Nav.Item><Link to="/login">Login</Link></Nav.Item>
				{/* <Nav.Item><Link to="/admin">Admin</Link></Nav.Item> */}
			</NavbarBS>
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			{/* <Route path="/admin" component={Admin} /> */}
		</Router>
	);
};

export default Navbar;