import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default Navbar = () => {

	return (
		<div className="container">
			<nav>
				<Router>
					<ul>
						{/* navbar to come */}
						<Link to="/register">Register</Link> -- <Link to="/login">Login</Link>
					</ul>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Router>

				<ul>
					<li><a href="#">Register</a></li>
					<li><a href="#">Login</a></li>
					<li><a href="#">Play DOA!</a></li>
				</ul>
			</nav>
		</div>
	);
};

//  Navbar;