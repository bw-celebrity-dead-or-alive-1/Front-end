
import React from "react";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Login from "./components/Login";
import Register from "./components/Register";
import CelebAdmin from "./components/Admin";
import Test from "./components/test/Test.js";
import CelebEdit from "./components/AdminEdit";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const sContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
`

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Container as={sContainer}>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/admin" component={CelebAdmin} />
					<Route path="/test" component={Test} />
					<Route path="/edit/:id" component={CelebEdit} />
				</Container>
			</Router>
		</div>
	);
}

export default App;
