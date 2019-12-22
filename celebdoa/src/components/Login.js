import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import LogRegFields from './LogRegFields';

function clg(...x) {
	console.log(...x);
} // because i'm sick of mistyping console.log

const Login = (props) => {
	return (
		<Card style={{ width: '35rem' }}>
			<LogRegFields register={false} />
		</Card>
	);
};

export default Login;

