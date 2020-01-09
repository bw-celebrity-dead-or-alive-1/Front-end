import React from "react";
import { Link } from "react-router-dom";

import { Navbar as NavbarBS, Nav } from "react-bootstrap";

const Navbar = () => {
	return (
		<NavbarBS bg="light">
			<NavbarBS.Brand href="/">Celeb DOA</NavbarBS.Brand>
			<Nav.Item>
				<Nav.Link as={Link} to="/register">
					Register
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={Link} to="/login">
					Login
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link as={Link} to="/admin">
					Admin
				</Nav.Link>
			</Nav.Item>
		</NavbarBS>
	);
};

export default Navbar;
