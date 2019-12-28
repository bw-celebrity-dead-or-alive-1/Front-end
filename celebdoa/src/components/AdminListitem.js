import React from "react";
import { Card, Image, Col, Row } from "react-bootstrap";

function clg(...x) { console.log(...x) }

const AdminListItem = props => {
	const { id, celebname, image_url, factoid, birthyear, alive } = props.item;

	return (
		<Card style={{ padding: ".5em", maxWidth: '40rem', textAlign: 'left', margin: "auto" }}>
			<Card.Body style={{ margin: "0", padding: "0" }}>
				<Row>
					<Col style={{ maxWidth: '120px' }}>
						<PutImage image={image_url} />
					</Col>
					<Col>
						<Card.Title variant="secondary"> {id}: {celebname}</Card.Title>
						<p>
							{birthyear} -- {isAlive(alive)}<br />
							{factoid}
						</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

const isAlive = arethey => {
	return arethey
		? "Alive"
		: "Dead"
}

const PutImage = props => {
	// clg(props.image)
	return (
		<Image
			style={{
				width: "100px",
				height: "100px",
				objectFit: "cover",
				objectPosition: "0 80%"
			}}
			src={props.image}
		/>
	)
}

export default AdminListItem;