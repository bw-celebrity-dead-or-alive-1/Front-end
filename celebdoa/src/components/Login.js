import React from 'react';
import { Card } from 'react-bootstrap';

import LogRegFields from './LogRegFields';

const Login = (props) => {
	return (
		<Card style={{ width: '35rem' }}>
			<LogRegFields register={false} />
		</Card>
	);
};

export default Login;

