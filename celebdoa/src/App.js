import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar"

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
			<Navbar />
		</div>
	);
}

export default App;
