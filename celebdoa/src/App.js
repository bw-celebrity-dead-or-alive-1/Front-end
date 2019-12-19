import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Router>
				<p> 
					{/* navbar to come */}
					<Link to="/register">Register</Link> -- <Link to="/login">Login</Link>
				</p>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</Router>
		</div>
	);
}

export default App;
