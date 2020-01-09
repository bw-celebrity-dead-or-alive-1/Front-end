import React from "react"
import {Alert} from "react-bootstrap";

function ValidateFields(props) {
	let display = "none"
	if (props.validate.length !== 0) { display = "block" }
	return (
		<Alert variant="danger" style={{ display: display }}>
			{props.validate.map(v => {
				// clg(80,v)
				return (
					<div key={props.validate.indexOf(v)}>{v}</div>)
			})}
		</Alert>
	)
}


export default ValidateFields